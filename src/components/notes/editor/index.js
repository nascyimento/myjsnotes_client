import { useEffect, useRef } from "react";
import 'react-quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';

const Editor = (props) => {

    let oldNote = useRef(null);

    const { quill, quillRef } = useQuill();
    useEffect(() => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(props.note.body);
            oldNote.current = props.note;
        }
    }, [props.note]);

    useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
                if (source === 'user') {
                    let newNote = quill.root.innerHTML;
                    updateNote(oldNote.current, newNote);
                }
            });
        }
    }, [quill]);


    const updateNote = async (oldNote, newNote) => {
        let title = newNote.replace(/(<([^>]+)>)/ig, " ").substring(0, 15);
        props.updateNote(oldNote, { 'title': title, 'body': newNote })
    }

    return (
        < >
            <div style={{ width: '100%', height: '100%' }}>
                <div ref={quillRef} />
            </div>
        </ >
    )
}

export { Editor }