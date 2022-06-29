import { useState } from 'react';
import './App.css';
// import LoginPage from './loginPage/LoginPage';
// import ContentPage from './Contents/ContentPage';
import NotesMain from './NotesPage/NotesMain';
// import Notes from './NotesPage/Notes';
import NotesSide from './NotesPage/NotesSide';

function App() {




  return (
    <>
      {/* <div className="cover">
        <h1>NoteItDown</h1>
        <LoginPage/>
      </div>
      <div className="cover page1"></div> */}

      {/* <ContentPage /> */}
      {/* <Notes /> */}
      <NotesSide  />
      <NotesMain />
    
    </>
  );
}

export default App;
