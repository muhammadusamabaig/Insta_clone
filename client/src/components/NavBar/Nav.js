import React from "react";
import { Navbar,Nav} from 'react-bootstrap';
import {

  Link
} from "react-router-dom";
import logo from '../assets/instagram.png'
function NavBar() {
  return (
    <Navbar className="row" bg="light" expand="lg">
      <Navbar.Brand >  <Link to="/login"><img alt="logo" style={{ width: "50px" }} src={logo} /></Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse   id="basic-navbar-nav">
        <Nav className="mr-auto">
                      <Link style={{ color: "black", padding:"5%", float: "right",fontWeight:"bold", fontFamily: "Lobster Two", textDecoration: "none" }} to="/Login">Login</Link>
          
          
            <Link style={{ color: "black", padding:"5%",float: "right",fontWeight:"bold", fontFamily: "Lobster Two", textDecoration: "none" }} to="/Singup">SignUp</Link>
      
          
            <Link style={{ color: "black", float: "right" ,padding:"5%",fontWeight:"bold", fontFamily: "Lobster Two", textDecoration: "none" }} to="/profile">Profile</Link>
        

        </Nav>
        {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavBar;






