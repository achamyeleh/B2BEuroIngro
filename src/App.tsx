import React from 'react';
import logo from './images/logo.png';
import './App.css';
import {RegistrationForm} from './Components/RegistrationForm'
import Grid from './Components/DisplayGrid'
import Nav from './Components/Nav'
import {Footer} from './Components/Footer'
import {Table} from './Components/test'

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="50%" /> */}
        <p>
          Welcome to GollemTimes page
        </p>
      {/* </header> */}
      {/* <RegistrationForm /> */}
     
      {/* <Grid /> */}
      {/* <Table /> */}
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
