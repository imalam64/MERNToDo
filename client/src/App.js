import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ToDoApp from './Components/ToDoApp/ToDoApp';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <NavBar />
          <ToDoApp />
        </div>
      </Provider>
    );
  }
}

export default App;