import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ToDoApp from './Components/ToDoApp/ToDoApp';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <ToDoApp />
      </div>
    );
  }
}

export default App;