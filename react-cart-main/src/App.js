import React from 'react';
import './App.css';
import "./Components/FontAwesomeIcons";
import Router from "./Components/Routes/Routes.jsx"
import AppProvider from './Components/AppProvider';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router/>
      </AppProvider>
    </div>
  );
}

export default App;
