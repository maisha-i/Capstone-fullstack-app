import { useEffect, useState } from "react";
import "./Notes.css"

function NotesMain({notes, noteShown, onUpdateNote}){

    console.log("in main:", noteShown)

    const getNoteShown = () => {
        return notes.find((note) => note.id == noteShown);
    };   
    
    const currentPage = getNoteShown();
    // const [currentPage, setCurrentPage] = useState(getNoteShown());
    console.log("current page is:", currentPage)

    // useEffect(() => {setCurrentPage(getNoteShown())}, [noteShown])


    useEffect(() => {getNoteShown()}, [noteShown])

    const onEditField = (key, value) => {

        onUpdateNote({

            ...noteShown,
            [key]: value,
    
        })

    };

    if(!currentPage)
    return <div className="no-note-shown">No note shown</div>

    return <div className="notes-main">
        <div className="main-note-edit">

        <input className='title-input' type="text" id="title" value={currentPage.title} onChange={(e) => onEditField("title", e.target.value)} autoFocus />

        <textarea className='content-input'id="body" placeholder="Write your note here..." value={currentPage.content} onChange={(e) => onEditField("content", e.target.value)}/>

            
        </div>

        <div className="main-note-preview">

            <h1 className="preview-title">{currentPage.title}</h1>

            <div className="preview-content">{currentPage.content}</div>

        </div>
    </div>

}

export default NotesMain;