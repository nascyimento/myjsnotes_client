import { Fragment, useState, useEffect } from "react";
import ReactQuill from 'react-quill';
import { useQuill } from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';

const Editor = (props) => {

    const { quill, quillRef } = useQuill();
    let [currentContent, setCurrentContent] = useState('')
    let [timer, setTimer] = useState(null);

    const handleChange = (content, delta, source) => {
        clearInterval(timer);
        if (source === 'user') {
            setCurrentContent(content);
            updateNote(content);
        }
    }

    const updateNote = (content) => {
        let title = content.replace(/(<([^>]+)>)/ig, " ").substring(0, 15);
        props.updateNote(props.note, { 'title': title, 'body': content });
    }

    useEffect(() => {
        setCurrentContent(props.note.body)
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(props.note.body);
        }
    }, [props.note]);

    useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
                let content = quillRef.current.firstChild.innerHTML;
                handleChange(quillRef.current.firstChild.innerHTML, delta, source);
            });
        }
    }, [quill]);

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
            {/* <ReactQuill value={currentContent} modules={modules} onChange={handleChange} /> */}
            <div style={{ width: "100%", height: "100%" }}>
                <div ref={quillRef} />
            </div>
        </Fragment>
    )
}

export { Editor }