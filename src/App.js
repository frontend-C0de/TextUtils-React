import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enable or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = (cls) => {
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#010b13';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About mode={mode} />}> 
            </Route> */}
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />}> */}
        <TextForm showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />
        {/* </Route>
          </Routes>  */}
      </div>
      {/* </Router> */}
    </>
  );
}
export default App;

