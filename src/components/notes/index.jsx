import { Column } from "rbx";
import { useEffect, useState } from "react";
import { push as Menu } from "react-burger-menu";
import NotesService from "../../services/notes";
import { ListNotes } from "./list";
import { Editor } from "./editor";
import { Search } from "./search";
import { useCallback } from "react";

const Notes = (props) => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({
    title: "",
    body: "",
    _id: "",
  });

  const selectNote = (id) => {
    let note = notes.find((note) => {
      return note._id === id;
    });
    setCurrentNote(note);
  };

  const handleScroll = useCallback(() => {
    if (window.scrollY > 70) {
      document.querySelector(".ql-editor").style = `margin-top: ${
        document.querySelector(".ql-toolbar").getBoundingClientRect().height
      }px`;
      document.querySelector(".ql-toolbar").classList.add("fixed");
    } else {
      document.querySelector(".ql-toolbar").classList.remove("fixed");
      document.querySelector(".ql-editor").style = ``;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    fetchNotes();
  }, [handleScroll]);

  useEffect(() => {
    if (currentNote._id === "") {
      props.setIsOpen(true);
    }
  }, [currentNote._id, props]);

  useEffect(() => {
    if (props.isOpen) {
      document.body.style = "overflow-y: hidden";
    } else {
      document.body.style = "";
    }
  }, [props.isOpen]);

  const fetchNotes = async () => {
    const { data } = await NotesService.index();
    setNotes(
      data.sort((a, b) =>
        new Date(a.updatedAt) > new Date(b.updatedAt)
          ? -1
          : new Date(a.updatedAt) < new Date(b.updatedAt)
          ? 1
          : 0
      )
    );
  };

  const createNote = async () => {
    await NotesService.create();
    fetchNotes();
  };

  const deleteNote = async (note) => {
    await NotesService.delete(note._id);
    fetchNotes();
  };

  const updateNote = async (oldNote, params) => {
    let { data } = await NotesService.update(oldNote._id, params);
    let newNotes = notes;
    newNotes[notes.indexOf(oldNote)] = data;
  };

  const searchNotes = async (query) => {
    let queryNotes = await NotesService.search(query);
    setNotes(queryNotes.data);
  };

  return (
    <>
      <Column.Group className="notes" id="notes">
        <Menu
          pageWrapId={"notes-editor"}
          isOpen={props.isOpen}
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          disableAutoFocus
          outerContainerId={"notes"}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <Column.Group>
            <Column size={10} offset={1}>
              <Search searchNotes={searchNotes} fetchNotes={fetchNotes} />
            </Column>
          </Column.Group>
          <ListNotes
            notes={notes}
            selectNote={selectNote}
            setIsOpen={props.setIsOpen}
            isOpen={props.isOpen}
            currentNote={currentNote}
            createNote={createNote}
            deleteNote={deleteNote}
            fetchNotes={fetchNotes}
          />
        </Menu>
        <Column size={12} className="notes-editor" id="notes-editor">
          <Editor note={currentNote} updateNote={updateNote} />
        </Column>
      </Column.Group>
    </>
  );
};

export { Notes };
