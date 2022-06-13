import { Column } from "rbx";
import { Fragment, useEffect, useState } from "react";
import { push as Menu } from 'react-burger-menu';
import NotesService from "../../services/notes";
import { ListNotes } from "./list";
import { Editor } from './editor'
import { Search } from "./search";


const Notes = (props) => {

    let [notes, setNotes] = useState([]);
    let [currentNote, setCurrentNote] = useState({ title: '', body: '', id: '' })

    const selectNote = (id) => {
        let note = notes.find((note) => {
            return note._id === id;
        })
        setCurrentNote(note);
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const response = await NotesService.index();
        setNotes(response.data.reverse());
        setCurrentNote(response.data[0]);
    }

    const createNote = async () => {
        await NotesService.create();
        fetchNotes();
    }

    const deleteNote = async (note) => {
        await NotesService.delete(note._id);
        fetchNotes();
    }

    const updateNote = async (oldNote, params) => {
        let updatedNote = await NotesService.update(oldNote._id, params);
        let index = notes.indexOf(oldNote);
        let newNotes = notes;
        newNotes[index] = updatedNote.data;
        setNotes(newNotes);
    }

    const searchNotes = async (query) => {
        let queryNotes = await NotesService.search(query);
        setNotes(queryNotes.data);
    }

    if (!currentNote) {
        props.setIsOpen(true);
    }

    if (props.isOpen) {
        document.body.style = 'overflow-y: hidden'
    } else {
        document.body.style = ''
    }

    return (
        <Fragment>
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
                        fetchNotes={fetchNotes} />
                </Menu>
                {currentNote &&
                    <Column size={12} className="notes-editor" id="notes-editor">
                        <Editor
                            note={currentNote}
                            updateNote={updateNote}
                        />
                    </Column>
                }
            </Column.Group>
        </Fragment>
    )
}

export { Notes };