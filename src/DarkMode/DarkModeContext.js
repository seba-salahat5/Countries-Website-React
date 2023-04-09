import { useState, createContext } from "react";

export const DarkModeContext = createContext();
export const DarkModeProvider = ({ children }) => {
  const darkModeFlag = JSON.parse(localStorage.getItem('darkMode')) != null ? JSON.parse(localStorage.getItem('darkMode')) : false; 
  const [darkMode, setDarkMode] = useState(darkModeFlag);
  const ToggleMode = (darkMode)=>{
    setDarkMode(darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  } 
  
  return (
    <DarkModeContext.Provider value={{darkMode, ToggleMode}}>
      {children}
    </DarkModeContext.Provider>
  );
};