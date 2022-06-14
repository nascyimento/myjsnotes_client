import { Fragment, useState, useEffect, useRef } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';

const Editor = (props) => {


    let oldNote = useRef(null)
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


    const updateNote = (oldNote, newNote) => {
        console.log('newNote ', newNote)
        console.log('oldnote ', oldNote)
        let title = newNote.replace(/(<([^>]+)>)/ig, " ").substring(0, 15);
        props.updateNote(oldNote, { 'title': title, 'body': newNote });
    }

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link'],
            ['clean'],
        ]
    }

    return (
        <Fragment>
            <div style={{ width: '100%', height: '100%' }}>
                <div ref={quillRef} />
            </div>
            {/* <ReactQuill value={currentContent} modules={modules} onChange={handleChange} /> */}
        </Fragment>
    )
}

export { Editor }