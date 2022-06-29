import './App.css';
import ContentPage from './Contents/ContentPage';
import Login from './Login/Login';

function App() {
  return (
    <>
      <div className="cover">
        <h1>noteItDown</h1>
        <Login/>
      </div>
      <div className="cover page1"></div>

      {/* <ContentPage /> */}
    </>
  );
}

export default App;
