
  import './App.css';
// import About from './components/About'; // Uncomment when needed
import Navbar from './Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import { useState } from 'react';

// Remove unused React Router imports for now
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#061f45';
      showAlert('Dark mode enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar title="textutils" aboutText="About " mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} mode={mode} />
      <div className="container">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm heading="Enter your text" mode={mode} showAlert={showAlert} />
          {/* </Route>
        </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}
export default App;
