import { useEffect, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";

const Editor = (props) => {
  const oldNote = useRef(null);
  const timerRef = useRef();
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(props.note.body);
      oldNote.current = props.note;
    }
  }, [props.note]);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        if (source === "user") {
          clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => {
            let newNote = quill.root.innerHTML;
            updateNote(oldNote.current, newNote);
          }, 3000);
        }
      });
    }
  }, [quill]);

  const updateNote = async (oldNote, newNote) => {
    let title = newNote.replace(/(<([^>]+)>)/gi, "").substring(0, 20);
    props.updateNote(oldNote, {
      title: title,
      body: newNote,
      updatedAt: new Date(),
    });
  };

  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <div ref={quillRef} />
      </div>
    </>
  );
};

export { Editor };
