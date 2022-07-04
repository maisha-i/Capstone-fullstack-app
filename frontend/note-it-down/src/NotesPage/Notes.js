import NotesMain from "./NotesMain";
import NotesSide from "./NotesSide";
import { useEffect, useState } from 'react';
import NotesSearch from "./NotesSearch";
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";

const Notes = ({selectedPageId, returnToContents}) => {

const [categoryId, setCategoryId] = useState(null);



useEffect(() => {fetch(`http://localhost:8080/page/getCategoryId/${selectedPageId}`)
.then(response => response.json())
.then(result => setCategoryId(result))},[])

useEffect(() => {if (categoryId !== null) {fetch(`http://localhost:8080/category/${categoryId}/pages`)
.then(response => response.json())
.then(result => setNotes(result))}}, [categoryId])

const [notes, setNotes] = useState([])

const [noteShown, setNoteShown] = useState(selectedPageId);

useEffect(() => {setNoteShown(selectedPageId)}, [notes])

// useEffect(() => console.log("note shown: "+noteShown), [noteShown])

  const onAddNote = () => {

    fetch(`http://localhost:8080/page/createpage?title=new%20note&content=%20&background=WHITE&category_id=${categoryId}`, {method: "POST"})

    console.log(notes)
    document.location.reload();
    
  };



  const [searchNote, setSearchNote] = useState('');


  const onUpdateNote = (updatedNote) => {

    const updatedNotesArray = notes.map((note) => {

      if(note.id === noteShown){
        return updatedNote;
      }

      return note;

    });

    setNotes(updatedNotesArray);

  }

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note)=> note.id !== idToDelete));
  };


  const notesSide = <NotesSide 

  //filter searchnotes
  notes = {notes}  
  
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