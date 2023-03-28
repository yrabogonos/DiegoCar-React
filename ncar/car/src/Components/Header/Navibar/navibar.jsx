import React from "react";
import '../header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from '../../../assets/img/icon.png';
import { Button, Nav, Navbar} from "react-bootstrap";
import {NavLink} from 'react-router-dom';

function Link(props){
  return(
    <NavLink to={props.data.path} className='text-decoration-none'>{props.data.name}</NavLink>
  );
}

const Navibar = (props)=>{
    return(
        <Navbar collapseOnSelect expand="lg">
        <div className="container nav-container mb-5">
            <Navbar.Brand href="#home">
                <img  src={logo} className='nav-logo' alt="logotype"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                {/* <Nav.Link href="#features">Авто із Казахстану</Nav.Link> */}
                {/* <NavLink to={"/DiegoCar-React/kaz"} className='text-decoration-none'>Авто із Казахстану</NavLink>
                <Nav.Link href="#pricing">Авто із ОАЕ</Nav.Link>
                <Nav.Link href="#pricing">Авто із Китаю</Nav.Link>
                <Nav.Link href="#pricing">Про нас</Nav.Link>
                <Nav.Link href="#pricing">Контакти</Nav.Link> */}
                {props.data.links.map(link => <Link data={link}/>)}
                
                <Button className='nav-btn mt-sm-3'>+38(096)530-47-77</Button>
              </Nav>
              
            </Navbar.Collapse>
        </div>
      </Navbar>
        
    );
}

export default Navibar;