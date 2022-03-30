import './App.css';
import { ThemeProvider } from './context/themeContext';
import Mission from './scenes/Mission';


function App() {

  return (
    <ThemeProvider>
      <div>
        <Mission />
      </div>
    </ThemeProvider>

  );
}

export default App;
