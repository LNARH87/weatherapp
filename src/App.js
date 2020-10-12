import React, { useState } from 'react';
import './App.css';
import LogIn from './LogIn';
import Home from './Home';

function App() {

  const [userLogIn, setUserLogIn] = useState(false);

  return (
    <div className="App">
      {!userLogIn && <LogIn setUserLogIn={setUserLogIn} />}
      { userLogIn && <Home setUserLogIn={setUserLogIn} />}
    </div>
  );
}

export default App;