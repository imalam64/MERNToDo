import React, { Component } from 'react';
import './App.css';
import DoComp from './Components/DoComp/DoComp';
import DoingComp from './Components/DoingComp/DoingComp';
import DoneComp from './Components/DoneComp/DoneComp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome to the best To-Do List!</h1>
        <DoComp />
        <DoingComp />
        <DoneComp />
      </div>
    );
  }
}

export default App;
