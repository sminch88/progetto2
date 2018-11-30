import React, {Component} from 'react'
import '../css/Home.css';
import Menu from './components/Menu.js';
class Home extends Component {
    render() {
      return (
        <div>
             Home   
             <Menu/>
        </div>
      );
    }
  }

  export default Home