import './App.css';
import Footer from './Footer/Footer';
import AuthChecker from './Navigation/AuthChecker';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';


export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <> 
      <ThemeContext.Provider value={{theme, toggleTheme}}> 
        <div className='App' id={theme}>

            <AuthChecker />  
            <div className="switch-toggle"> 
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
            </div> 

            {/* <Footer /> */}

            {/* <Settings/> */}

        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
