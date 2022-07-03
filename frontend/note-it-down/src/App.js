import './App.css';
import Footer from './Footer/Footer';
import AuthChecker from './Navigation/AuthChecker';
// import Notes from './NotesPage/Notes';

function App() {
    return (
    <div className='App'>
       
      <AuthChecker />

      {/* <Notes /> */}
     

     <Footer />

   
    </div>
  );
}

export default App;
