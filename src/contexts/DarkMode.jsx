import { createContext, useState } from "react";

export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState();

    const toggleDarkMode = () => {
        setIsDarkMode((isDarkMode) => !isDarkMode);
      };
    
    const valueObject = {isDarkMode, toggleDarkMode};

    return (
    <DarkModeContext.Provider value={valueObject}>
      {children}
    </DarkModeContext.Provider>
  );
};
export default DarkModeProvider;
