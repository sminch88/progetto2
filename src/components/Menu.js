import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,                                                                      //importare tutto anche su app?
  NavItem,
  NavLink
  } from 'reactstrap';
export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">About </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https:">Contact</NavLink>
              </NavItem>
            </Nav>
            </Collapse>
            </Navbar>
            </div>
            /*<Router>
            <div>
            <nav>
            <ul>
            <li>
            <link to="/">Home</link>
            </li>
            <li>
            <link to="/">Contact</link>
            </li>
            <li>
            <link to>="/">About</link>
            </li>
            </ul>
            </nav> 
            </div>
            <Router>
            <div>
                Route path "/" exact component= {Home}
                Route path "/" exact component= {Contact}
                Route path "/" exact component= {About}
            </div>
            </Router>
            
            
            
            
            */

    )
  }
}