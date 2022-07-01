import { useState } from 'react';
import './App.css';

import Footer from './Footer/Footer';
import Login from './Login/Login';
// import ContentPage from './Contents/ContentPage';

import uuid from 'react-uuid';
import Notes from './NotesPage/Notes';

function App() {

  


  return (
    <div className='App'>
       
      <div className="cover">
        <h1>noteItDown</h1>
        <Login/>
      </div>
      <div className="cover page1"></div>

      {/* <ContentPage /> */}
    {/* <Notes /> */}
     
    </div>

  );
    
   
}

export default App;
