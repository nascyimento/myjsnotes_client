import { Fragment, useState, useEffect } from "react";
import ReactQuill, { Quill } from 'react-quill';
import { useQuill } from "react-quilljs";
import 'react-quill/dist/quill.snow.css';

const Editor = (props) => {


    const { quill, quillRef } = useQuill();
    let [currentContent, setCurrentContent] = useState('')
    let [timer, setTimer] = useState(null);

    const handleChange = (content, delta, source) => {
        clearTimeout(timer);
        if (source === 'user') {
            setCurrentContent(content);
            setTimer(setTimeout(() => updateNote(content), 3000));
        }
    }

    useEffect(() => {
        setCurrentContent(props.note.body)
    }, [props.note]);

    useEffect(() => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML('<h1>React Hook for Quill!</h1>');
        }
    }, [quill]);

const updateNote = (content) => {
    let title = content.replace(/(<([^>]+)>)/ig, " ").substring(0, 15);
    props.updateNote(props.note, { 'title': title, 'body': content });
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
    // <Fragment>
    //     <ReactQuill value={currentContent} modules={modules} onChange={handleChange} />
    // </Fragment>
    <div>
        <div style={{ width: 500, heigth: 300 }}>
            <div ref={quillRef} onChange={console.log('123')}>
            </div>
        </div>
    </div>
)
}

export { Editor }