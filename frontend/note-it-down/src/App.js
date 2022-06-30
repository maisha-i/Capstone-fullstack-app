import { useState } from 'react';
import './App.css';
// import Login from './Login/Login';

// import Footer from './Footer/Footer';
// import ContentPage from './Contents/ContentPage';
import NotesMain from './NotesPage/NotesMain';
import NotesSide from './NotesPage/NotesSide';
import uuid from 'react-uuid';

function App() {

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


  return (
    <div className='App'>
       
      {/* <div className="cover">
        <h1>noteItDown</h1>
        <Login/>
      </div>
      <div className="cover page1"></div> */}

      {/* <ContentPage /> */}
    
      <NotesSide 
      notes = {notes}  
      onAddNote={onAddNote}  
      onDeleteNote={onDeleteNote} 
      noteShown={noteShown} 
      setNoteShown={setNoteShown} />


      <NotesMain 
      noteShown={getNoteShown()}
      onUpdateNote={onUpdateNote}/>
    </div>

  );
    
   
}

export default App;
