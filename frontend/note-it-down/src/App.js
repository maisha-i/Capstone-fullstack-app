import { useState } from 'react';
import './App.css';

import Footer from './Footer/Footer';
import Login from './Login/Login';
// import ContentPage from './Contents/ContentPage';

import uuid from 'react-uuid';
import Notes from './NotesPage/Notes';
import Settings from './Settings/SettingsPage';

import AuthChecker from './Navigation/AuthChecker';

function App() {

  


  return (
    <div className='App'>
       
       <AuthChecker />
      {/* <div className="cover">
        <h1>noteItDown</h1>
        <Login/>
      </div>
      <div className="cover page1"></div> */}

      {/* <ContentPage /> */}
    {/* <Notes /> */}
      {/* <Settings/> */}
     
    </div>

  );
    
   
}

export default App;
