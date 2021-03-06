import { useEffect, useState } from "react";
import "./Notes.css"

function NotesMain({notes, noteShown, onUpdateNote}){


    const getNoteShown = () => {
        return notes.find((note) => note.id == noteShown);
    };   
    
    const currentPage = getNoteShown();

    const [inEditMode, setInEditMode] = useState(false);

    useEffect(() => {getNoteShown()}, [noteShown])

    const onEditField = (key, value) => {

        onUpdateNote({

            ...currentPage,
            [key]: value,
    
        })

    };
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const updatedPage = {
            title: currentPage.title,
            content: currentPage.content,
            background: 0
        }
        const options = {
            method: "PUT",
            body: JSON.stringify(updatedPage),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        console.log(options)
        
        fetch(`http://localhost:8080/page/updatePage/${noteShown}`, options)
        setInEditMode(false);
    }

    const handleEditButtonClick = () => {
        setInEditMode(true);
    }

    

    if(!currentPage){
    return <div className="no-note-shown"><h2>No note selected</h2></div>}
    else{
    const editForm = (<div className="main-note-edit">
        <form onSubmit={handleFormSubmit}>

        <input className='title-input' type="text" value={currentPage.title} onChange={(e) => onEditField("title", e.target.value)} autoFocus />
        <textarea className='content-input' placeholder="Write your note here..." value={currentPage.content} onChange={(e) => onEditField("content", e.target.value)}/>
        <input type="submit" value="Save" id="note-save-btn"/>

         </form>
    </div>)
    return <div className="notes-main">
        
        {inEditMode ? editForm : <button className="edit-button" onClick={handleEditButtonClick}>Edit Note</button>}

        <div className="main-note-preview">

            <h1 className="preview-title">{currentPage.title}</h1>

            <div className="preview-content"><p>{currentPage.content}</p></div>

        </div>
    </div>}

}

export default NotesMain;