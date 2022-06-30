import "./Notes.css"

function NotesSide({notes, onAddNote, onDeleteNote, noteShown, setNoteShown}){
    return (
        <div className="notes-sidebar">
          <div className="app-sidebar-header">
            <h1>Notes</h1>

            <button onClick={onAddNote}>Add New Note</button>
        </div>

        <div className="app-sidebar-notes"> 
            {notes.map((note) => (

                 <div className={`app-sidebar-note ${note.id === noteShown && "active"} `}
                 onClick={() => setNoteShown(note.id)}> 
            
            <div className="sidebar-note-title"> 
            
            <strong>{note.title}</strong>

            <button onClick={() => onDeleteNote(note.id)}>Delete</button>

            </div>

            <p>{note.content }</p>

            </div>
            ))}

           
        </div>
        </div>

    )
   }


export default NotesSide;