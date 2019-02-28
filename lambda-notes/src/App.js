import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'
import './App.css';
import headerImg from "./images/header.png"

import Notes from "./components/Notes"
import CreateForm from './components/CreateForm';
import SingleNote from "./components/SingleNote";
import UpdateForm from './components/UpdateForm';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="headerImg">
          <img src= {headerImg} />
        </div>
        <div className="Menu">
          <NavLink to="/" className="menuButton">View Your Notes</NavLink>
          <NavLink to="/create" className="menuButton">+ Create New Note</NavLink>
        </div>
        <div className="mainContent">
          <Route path ="/create" component={  CreateForm  } />
          <Route exact path ="/" component={ Notes } />
          <Route path="/note/:id" component={ SingleNote } />
          <Route path="/edit/:id" component={ UpdateForm }/>
        </div>
      </div>
    );
  }
}

export default App;
