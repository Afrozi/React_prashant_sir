import {useState} from "react";
import './App.css'
import Welcome from "./Components/Welcome";
import ThemeToggle from "./Components/ThemeToggle";
import ThemeContext from "./Store/ThemeContext";

function App() {

   
   const [theme, setTheme] = useState("dark");

   const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === "light" ? "dark" : "light");
   }

  return (
    <>
     <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}> 
       <Welcome/>
       <ThemeToggle/>
      </ThemeContext.Provider>

      </>
  )
}

export default App
