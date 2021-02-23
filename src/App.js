import React, { Component } from 'react';
import {  BrowserRouter as Router, Route}from 'react-router-dom';

// css
import './css/font.css';
import './css/custom.css';
import './css/mob.css';

// Components
import Home from './components/pages/home';


class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
