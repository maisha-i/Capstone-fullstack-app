import { useEffect, useState } from "react";
import "./Notes.css"

function NotesSide({notes, onAddNote, onDeleteNote, noteShown, setNoteShown}){

    // useEffect(() => {
    //     if(notes.length !== 0){
    //         setTitle(notes[0].category.title)
    //     }},[notes])

    // console.log(sessionStorage.getItem("currentCategoryName"))

    return (
        <div className="sidebar">
          <div className="sidebar-header">
            <h1>{sessionStorage.getItem("currentCategoryName")}</h1>

            <button className ='add-note-button' onClick={onAddNote}>Add New Note</button>
        </div>

        <div className="sidebar-notes"> 
            {notes.map((note) => (

                 <div key={note.id} className={`sidebar-note ${note.id == noteShown && "active"} `}
                 onClick={(event) => {
                    if(event.target.id !== "deleteButton"){
                    sessionStorage.setItem("currentPage", note.id)
                    setNoteShown(note.id)
                }}}> 
            
            <div className="sidebar-note-title"> 
            
            <strong>{note.title}</strong>

            <button id="deleteButton" onClick={() => {
                onDeleteNote(note.id)
            }}>Delete</button>

            </div>

            <p>{note.content && note.content.substr(0, 22)+ "..."}</p>

           

            </div>
            ))}

           
        </div>
        </div>

    )
   }


export default NotesSide;