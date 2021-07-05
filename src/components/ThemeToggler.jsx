import React from 'react';
import { useThemeUpdate } from "./ThemeContext"

function ThemeToggler(props) {
    
    const toggleTheme = useThemeUpdate();
    
    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    );
}

export default ThemeToggler;