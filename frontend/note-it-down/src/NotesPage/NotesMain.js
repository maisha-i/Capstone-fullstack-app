import "./Notes.css"

function NotesMain({noteShown, onUpdateNote}){

    const onEditField = (key, value) => {

        onUpdateNote({

            ...noteShown,
            [key]: value,
    


        })

    };

    if(!noteShown)
    return <div className="no-note-shown">No note shown</div>

    return <div className="notes-main">
        <div className="main-note-edit">

        <input class= 'title-input' type="text" id="title" value={noteShown.title} onChange={(e) => onEditField("title", e.target.value)} autoFocus />

        <textarea class= 'content-input'id="body" placeholder="Write your note here..." value={noteShown.content} onChange={(e) => onEditField("content", e.target.value)}/>

            
        </div>

        <div className="main-note-preview">

            <h1 className="preview-title">{noteShown.title}</h1>

            <div className="preview-content">{noteShown.content}</div>

        </div>
    </div>

}

export default NotesMain;