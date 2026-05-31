import './App.css'
import Card from "./components/Card";
import ReactDeveloper from './assets/React-developer.jpg'

function App() {
  return (
    <>
      <Card>
        <h2>درباره من</h2>
        <p>Frontend Developer</p>
      </Card>

      <Card>
        <img className="card-image" src={ReactDeveloper} alt="profile"/>
        <p>React Developer</p>
      </Card>

      <Card>
        <button>Click Me</button>
      </Card>
    </>
  );
}

export default App;