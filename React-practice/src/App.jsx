import { useState } from 'react';
import './App.css'
import Users from './components/Users';


function App() {

  function handleState(){
    setState(false)
  }

  const [state , setState] = useState(true)

  return (
    <>
      {state ? <Users onClick={handleState}/> : <h1>Component unmounted</h1>}
    </>
  );
}

export default App;
