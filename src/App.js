import React, { Component } from 'react';
import './css/App.css';
import Menu from './components/Menu.js'
import Home from './components/Home.js'
import Contact from './components/Contact.js'
import About from './components/About.js'
import{BrowserRouter as Router, Route, Link} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
           <Home />
           <Contact/>
           <About/> 
      </div>
    );
  }
}

export default App;