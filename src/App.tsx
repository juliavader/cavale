import { ThemeProvider } from './libs/context/themeContext';
import { MissionWizardProvider } from './libs/context/MissionWizardContext';
import MissionCard from './libs/components/MissionCard';
import missions from "./helpers/missions.json";
import "./libs/scss/index.scss";

function App() {
  return (
    <ThemeProvider>
      <MissionWizardProvider>
        <header className='list-missions__header'>
          <h1>Trouve ta mission</h1>
        </header>
        <main className="missions_slider">
          {missions.map(missionsData => {
            return <MissionCard missionData= {missionsData}/>;
          })}
        </main>
        <footer>
          <ul>
            <li>
              <p>Missions</p>
            </li>
            <li>
              <p>Deconnexion</p>
            </li>
          </ul>
        </footer>
      </MissionWizardProvider>
    </ThemeProvider>

  );
}

export default App;
