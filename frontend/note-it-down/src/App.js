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


  return (
    <>
      {/* <div className="cover">
        <h1>NoteItDown</h1>
        <LoginPage/>
      </div>
      <div className="cover page1"></div> */}

      {/* <ContentPage /> */}
    
      <NotesSide notes = {notes}  onAddNote={onAddNote} />
      <NotesMain />
    
    </>
  );
}

export default App;
