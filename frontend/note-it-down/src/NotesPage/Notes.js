import NotesMain from "./NotesMain";
import NotesSide from "./NotesSide";
import { useEffect, useState } from 'react';
import NotesSearch from "./NotesSearch";

const Notes = ({returnToContents, categoryId}) => {

  useEffect(() => {if (categoryId !== null) {fetch(`http://localhost:8080/category/${categoryId}/pages`)
  .then(response => response.json())
  .then(result => setNotes(result))}}, [categoryId])

  const [notes, setNotes] = useState([])

  const [noteShown, setNoteShown] = useState(sessionStorage.getItem("currentPage"));

  const onAddNote = () => {

    fetch(`http://localhost:8080/page/createpage?title=new%20note&content=%20&background=WHITE&category_id=${categoryId}`, {method: "POST"})

    document.location.reload();
    
  };

  const [searchNote, setSearchNote] = useState('');

  const onUpdateNote = (updatedNote) => {

    const updatedNotesArray = notes.map((note) => {

      if(note.id == noteShown){
        return updatedNote;
      }

      return note;

    });

    setNotes(updatedNotesArray);

  }

  const onDeleteNote = (idToDelete) => {
    fetch(`http://localhost:8080/page/deletePage/${idToDelete}`, {method: "DELETE"})
    setNoteShown(null)
    setNotes(notes.filter((note)=> note.id !== idToDelete));
  };


  const notesSide = <NotesSide 

  //filter searchnotes
  notes = {notes.filter((note) => note.title.toLowerCase().includes(searchNote) 
    )}  
  
  onAddNote={onAddNote}  
  onDeleteNote={onDeleteNote} 
  noteShown={noteShown} 
  setNoteShown={setNoteShown} />

  const notesMain = <> 
   <NotesMain
  notes = {notes}
  noteShown={noteShown} 
  onUpdateNote={onUpdateNote}/>
  </>

  return(
    <>
      {sessionStorage.getItem("doesNotesAnimation") && <div className="forwards pageCover"></div>}
      <div className="notesContainer">

      <button className='back-to-contents' onClick={returnToContents}>Back to Contents</button>

      <NotesSearch handleSearchNote={setSearchNote} />  
        <div className="container-box-notes">
          {notesSide}
          {notesMain}
        </div>
      

      </div>

     
    </>
  )
}

export default Notes;