import React from "react";
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from '../assets/img/icon.png';




import { Button, Nav, Navbar} from "react-bootstrap";

const Navibar = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg">
        <div class="container nav-container mb-5">
            <Navbar.Brand href="#home">
                <img  src={logo} class='nav-logo' alt="logotype"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Авто із Казахстану</Nav.Link>
                <Nav.Link href="#pricing">Авто із ОАЕ</Nav.Link>
                <Nav.Link href="#pricing">Авто із Китаю</Nav.Link>
                <Nav.Link href="#pricing">Про нас</Nav.Link>
                <Nav.Link href="#pricing">Контакти</Nav.Link>
                <Button className='nav-btn mt-sm-3'>+38(096)530-47-77</Button>
              </Nav>
              
            </Navbar.Collapse>
        </div>
      </Navbar>
        
    );
}


const Mainheader = ()=>{
    return(
        <div className="container main-header-container">
            <div class="row main-header d-flex justify-content-between container-fluid">
                <div class="col-lg-7 col-md-12 col-sm-12  main-banner mb-3  mb-lg-0 d-flex flex-column">
                    <h2>Аналізуємо <br></br> світовий <span>авто-ринок</span></h2>
                    <p>в порівнянні з Українським і допомагаємо обрати кращий варіант не лише по вартості, але і по термінам.</p>
                    <ul className="banner-list">
                        <li>Досвід роботи більше 30 років</li>
                        <li>Допомога з вибором автівки та країною для купівлі</li>
                    </ul>
                    <Button className='banner-btn mt-sm-3'>Отримати консультацію</Button>
                </div>
               
                <div class="col-lg-4 col-md-12 col-sm-12 container-fluid main-countries d-flex flex-column">
                    <div className="countries-item d-flex">
                        <div className='item-img-kor'>
                       
                        </div>
                        <div className="item-text">
                            <h3 className="text-header">Південна Корея</h3>
                            <p className="text-p">Найкращі європейські авто у повній комплектації</p>
                        </div>
                    </div>
                    <div className="countries-item d-flex">
                        <div className='item-img-kaz'>
                       
                        </div>
                        <div className="item-text">
                            <h3 className="text-header">Казахстан</h3>
                            <p className="text-p">Лише авто без пробігу</p>
                        </div>
                    </div>
                    <div className="countries-item d-flex">
                        <div className='item-img-oae'>
                        
                        </div>
                        <div className="item-text">
                            <h3 className="text-header">Арабські емірати</h3>
                            <p className="text-p">Унікальні автівки</p>
                        </div>
                    </div>
                    <div className="countries-item d-flex">
                        <div className='item-img-china'>
                       
                        </div>
                        <div className="item-text">
                            <h3 className="text-header">Китай</h3>
                            <p className="text-p">Найкращі китайські авто</p>
                        </div>
                    </div>

                </div>
                
           
            </div>
        </div>
    );
}


function Header(){
    return(
        <div class="header  p-0">
            <div class="header-wrap ">
                <Navibar />
                <Mainheader/>
               
            </div>
        </div>
        
    );
} 

export default Header;