import { createContext, useState } from "react";

//create context
export const ThemeContext = createContext();

// create provider
export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(false);

  return (
    <ThemeContext.Provider value={[themeMode, setThemeMode]}>
      {children}
    </ThemeContext.Provider>
  );
};
