import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './header.css'
import '../../weather.js'
const Header = () => {
  return (
    <div className="wrapper">
      <Navbar expand="lg">
      <Container fluid>
        <Link to="/"><img className="logoImg ms-5" src="/images/logoTM.png" alt="logo"/></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0"
            navbarScroll>
          
            <div className="left-right-wrapper">
              <div className="left-nav"> 
                 <Link to="menu" className="fw-bold px-4">MENU</Link>
                 <Link to="menu" className="fw-bold px-4">REWARDS</Link>
                 <Link to="menu" className="fw-bold px-4">GIFT CARDS</Link>
              </div> 
              <div className="right-nav">
              <button  id="weather"><i  className="bi bi-cloud-sun-fill" ></i></button>
              
                 <i className="bi bi-geo-alt-fill"></i><Link to='/'>Find a Store</Link>
                 <Button className="buttons btn-hover">Sign In</Button>
                 <Button className="buttons btn-dark btn-hover ">Join Now</Button>
              </div>
          </div>
          </Nav>
         </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
