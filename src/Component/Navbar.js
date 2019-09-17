import React from 'react';
import { Nav,Navbar } from 'react-bootstrap';
class Navbars extends React.Component{
    render(){
     return (
 <div >
    <Navbar bg="dark" variant="dark">
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
    <Nav.Link href="#About" className="App-link">About</Nav.Link>

    </Navbar>
</div>
        )
    }
}
export default Navbars;

