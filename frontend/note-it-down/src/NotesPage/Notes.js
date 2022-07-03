import NotesMain from "./NotesMain";
import NotesSide from "./NotesSide";
import { useState } from 'react';
import uuid from 'react-uuid';

const Notes = ({selectedPageId, returnToContents}) => {



const [notes, setNotes] = useState([])

  const [noteShown, setNoteShown] = useState(false);

  const onAddNote = () => {
    
    const newNote = {
      id: uuid(),
      title: "new note",
      content:"",
    };

    setNotes([newNote, ...notes])
  };

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

  const getNoteShown = () => {
    return notes.find((note) => note.id === noteShown);
  };


  return(
      <>
      <button className = 'back-to-contents' onClick={returnToContents}>Back to Contents</button>
      <NotesSide 
      notes = {notes}  
      onAddNote={onAddNote}  
      onDeleteNote={onDeleteNote} 
      noteShown={noteShown} 
      setNoteShown={setNoteShown} />


      <NotesMain 
      noteShown={getNoteShown()}
      onUpdateNote={onUpdateNote}/>
    
      </>

  )
}

export default Notes;