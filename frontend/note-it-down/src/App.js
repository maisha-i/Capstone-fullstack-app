import './App.css';
import AuthChecker from './Navigation/AuthChecker';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';


export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState(sessionStorage.getItem("mode"));

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    if(sessionStorage.getItem("mode") == "dark"){
      sessionStorage.setItem("mode", "light")
    } else{sessionStorage.setItem("mode", "dark")}
  }

  return (
    <> 
      <ThemeContext.Provider value={{theme, toggleTheme}}> 
        <div className='App' id={theme}>

            <AuthChecker />  
            <div className="switch-toggle"> 
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
            <div className='darkmode-switch'>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
            </div>
            </div>

        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
