import "./Notes.css"

function NotesSide({notes, onAddNote, onDeleteNote, noteShown, setNoteShown}){
    return (
        <div className="sidebar">
          <div className="sidebar-header">
            <h1>Notes</h1>
            </div>
            <div>
            <button class ='add-note-button' onClick={onAddNote}>Add New Note</button>
        </div>

        <div className="sidebar-notes"> 
            {notes.map((note) => (

                 <div className={`sidebar-note ${note.id === noteShown && "active"} `}
                 onClick={() => setNoteShown(note.id)}> 
            
            <div className="sidebar-note-title"> 
            
            <strong>{note.title}</strong>

            <button onClick={() => onDeleteNote(note.id)}>Delete</button>

            </div>

            <p>{note.content && note.content.substr(0, 22)+ "..."}</p>

            </div>
            ))}

           
        </div>
        </div>

    )
   }


export default NotesSide;