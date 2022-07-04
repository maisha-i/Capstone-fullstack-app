import NotesMain from "./NotesMain";
import NotesSide from "./NotesSide";
import { useEffect, useState } from 'react';
import NotesSearch from "./NotesSearch";

const Notes = ({returnToContents}) => {

  const categoryId = sessionStorage.getItem("currentCategory");

// useEffect(() => {fetch(`http://localhost:8080/page/getCategoryId/${selectedPageId}`)
// .then(response => response.json())
// .then(result => {sessionStorage.setItem("currentCategory",result); setCategoryId(result)})},[])

useEffect(() => {if (categoryId !== null) {fetch(`http://localhost:8080/category/${categoryId}/pages`)
.then(response => response.json())
.then(result => setNotes(result))}}, [categoryId])

const [notes, setNotes] = useState([])

const [noteShown, setNoteShown] = useState(sessionStorage.getItem("currentPage"));

// useEffect(() => {setNoteShown(sessionStorage.getItem("currentPage"))}, [notes])

// useEffect(() => console.log("note shown: "+noteShown), [noteShown])

  const onAddNote = () => {

    fetch(`http://localhost:8080/page/createpage?title=new%20note&content=%20&background=WHITE&category_id=${categoryId}`, {method: "POST"})

    // console.log(notes)
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

  const notesMain = <NotesMain
  notes = {notes}
  noteShown={noteShown} 
  // getNoteShown={getNoteShown}
  onUpdateNote={onUpdateNote}/>

  return(
      <>

      

      <button className='back-to-contents' onClick={returnToContents}>Back to Contents</button>

      <NotesSearch handleSearchNote={setSearchNote} />  
    
      {notesSide}

      {notesMain}
    
      </>

  )
}

export default Notes;