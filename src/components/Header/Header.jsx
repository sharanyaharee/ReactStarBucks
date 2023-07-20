import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,useNavigate } from "react-router-dom";
import './header.css'

const Header = () => {
const navigate = useNavigate()
 const ConditionalHeader = () => {
    const loggedIn = sessionStorage.getItem('userLoggedIn');
    const userName = sessionStorage.getItem('name');
  console.log(userName)
    if (loggedIn && userName) {
      return (
        <>
          <span className="user">Hii {userName}</span>
          <button className='btn btn-danger' onClick={handleLogOut}>Logout</button>
        </>
      );
    }else {
    return (
      <>
        <Link to="/signIn"><Button className="buttons btn-hover">Sign in</Button></Link>
        <Link to="/register"><Button className="buttons btn-dark btn-hover">Join Now</Button></Link>
      </>
    );
  }
};
const handleLogOut =()=>{
  sessionStorage.removeItem('userLoggedIn');
  sessionStorage.removeItem('name');
  navigate(`/signIn`)
}

useEffect(()=>{
const successCallback = (position) => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
  fetch(url, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      let cityName = data.city.name;
      let temperature = data.list[0].temp.day + "°C";
      weather.innerText = `${cityName}-${temperature}`.toUpperCase();
    });
};
const errorCallback = (error) => {
  weather.innerText = "Geo not supported!";
};
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
 },[])


 const handleMode = ()=> {
    themeSwitch.classList.toggle("bi-moon-fill");
    document.body.classList.toggle("dark");
  }

  return (
    <div className="wrapper myNavbar">
      <Navbar expand="lg myNavbar">
      <Container fluid>
        <Link to="/"><img className="logoImg ms-5" src="/images/logoTM.png" alt="logo"/></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0"
            navbarScroll>
          
            <div className="left-right-wrapper">
              <div className="left-nav"> 
                 <Link to={"/menu"} className="fw-bold ps-4">MENU</Link>
                 <Link to={"/menu"} className="fw-bold px-5">REWARDS</Link>
                 <Link to={"/menu"} className="fw-bold ps-3">GIFT CARDS</Link>
              </div> 
              <div className="right-nav">
              <button  id="weather"><i className="bi bi-cloud-sun-fill" ></i></button>
                 <i className="bi bi-geo-alt-fill" ></i>
                 <Link to='/store'>Find a Store</Link>
    
                  {ConditionalHeader()}
                 <i  onClick={handleMode} className="bi bi-brightness-high-fill"  id="themeSwitch" ></i>
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
