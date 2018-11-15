import React, { Component } from 'react';
import './App.css';

import Notes from "./components/Notes"

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="sideMenu">
          <h1>Lambda Notes</h1>
          <p className="menuButton">View Your Notes</p>
          <p className="menuButton">+ Create New Note</p>
        </div>
        <div className="mainContent">
          <Notes />
        </div>
      </div>
    );
  }
}

export default App;
