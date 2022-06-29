import "./Notes.css"

function NotesSide({ notes}){
    return (
        <div className="notes-sidebar">
          <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button>Add New Note</button>
        </div>

        <div className="app-sidebar-notes">
            <div className="app-sidebar-note"> 
            <div className="sidebar-note-title"> 
            
            <strong>Title</strong>

            <button>Delete</button>

            </div>

            <p>Note preview</p>

            </div>
        </div>
        </div>

    )
   }


export default NotesSide;