import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import DoComp from './Components/DoComp/DoComp';
import DoingComp from './Components/DoingComp/DoingComp';
import DoneComp from './Components/DoneComp/DoneComp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <DoComp />
        <DoingComp />
        <DoneComp />
      </div>
    );
  }
}

export default App;
