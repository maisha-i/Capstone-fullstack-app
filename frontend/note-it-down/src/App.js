import { useState } from 'react';
import './App.css';
// import LoginPage from './loginPage/LoginPage';
// import ContentPage from './Contents/ContentPage';
import NotesMain from './NotesPage/NotesMain';
import NotesSide from './NotesPage/NotesSide';
import uuid from 'react-uuid';

function App() {

  const [notes, setNotes] = useState([])

  const onAddNote = () => {
    
    const newNote = {
      id: uuid(),
      title: "new note",
      content:"...",
    };

    setNotes([newNote, ...notes])
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note)=> note.idToDelete));
  }


  return (
    <>
      {/* <div className="cover">
        <h1>noteItDown</h1>
        <Login/>
      </div>
      <div className="cover page1"></div> */}

      {/* <ContentPage /> */}
    
      <NotesSide notes = {notes}  onAddNote={onAddNote}  onDeleteNote={onDeleteNote} />
      <NotesMain />
    
      <ContentPage />
    </>
  );
}

export default App;
