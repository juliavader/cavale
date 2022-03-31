import { ThemeProvider } from './libs/context/themeContext';
import Mission from './scenes/Mission';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  return (
    <ThemeProvider>
      <Router>
        <Link to="/mission">Mission</Link>
        <Routes>
          <Route path="/mission" element={<Mission/>} />
        </Routes>
      </Router>
    </ThemeProvider>

  );
}

export default App;
