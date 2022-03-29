import React, {useState} from 'react';
import './App.css';
import { ThemeContext, ThemeContextInterface } from './context/themeContext';

function App() {
  const [backgroundTheme, setbackgroundtheme] = useState(true);

  const ThemeContextValue: ThemeContextInterface = {
    lightTheme: backgroundTheme,
    toggleTheme: () => setbackgroundtheme(!backgroundTheme)
  }

  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      <div>
        <h1>hi</h1>
      </div>
    </ThemeContext.Provider>
      
  );
}

export default App;
