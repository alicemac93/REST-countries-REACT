import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// hook useTheme()
export function useTheme() {
    return useContext(ThemeContext)
}

// hook useTheme()
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(prev => !prev)
      }
      
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                 {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
};
