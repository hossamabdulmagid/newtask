import React from 'react';
import {NavLink } from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap'
import Summry from './projectsummry';
const Navbars = () => {
     return (
    <Navbar bg="dark" variant="dark">
                <div className="container-fluid">

    <Navbar.Brand href="#home">
    <img
    alt=""
    src="https://lh3.googleusercontent.com/eiZQ6YmnyDnpm3BZeefW4FKYLBqtUKFzQUU-sf-NRDA3AIE2Rq8qV2hy_fqA0qm4jQ"
    width="30"
    height="30"
    className="d-inline-block align-top"
    />
    {'  EraMint'}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"></Nav>
    </Navbar.Collapse>
    <NavLink exact  to='/' className="App-link"></NavLink>
        <Summry />
        <NavLink to='/About'  >About</NavLink>
        </div>

    </Navbar>
        )
    
}
export default Navbars;