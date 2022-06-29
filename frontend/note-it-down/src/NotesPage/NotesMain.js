import "./Notes.css"

function NotesMain(){

    return <div className="notes-main">
        <div className="app-main-note-edit">

        <input class= 'input' type="text" id="title" autoFocus />

        <textarea id="body" placeholder="Write your note here..." />

    

        
            

        </div>

        <div className="app-main-note-preview">

            <h1 className="preview-title">Title</h1>

            <div className="preview">note preview</div>

        </div>
    </div>

}

export default NotesMain;