import React from "react";
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button } from "react-bootstrap";
import logo from '../assets/img/icon.png';

const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="footer-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12  footer-el d-flex flex-column">
                            <img  src={logo} class='nav-logo footer-logo pb-3' alt="logotype"/>
                            <p className="footer-cop-p">© 2022 Diego. Усі права захищені, згідно  статті про авторське право. Будь-яке копіювання матеріалів сайту та елементів, включаючи зображення суворо заборонено.</p>
                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-12 footer-el footer-nav">
                            <div className="row container-fluid p-3 gap-4 gap-lg-0">
                                <div className="col-lg-6 col-sm-12 d-flex flex-column text-center footer-col gap-4">
                                    <a href="#features" className="footer-link">Авто із Казахстану</a>
                                    <a href="#pricing" className="footer-link">Авто із ОАЕ</a>
                                    <a href="#pricing" className="footer-link">Авто із Китаю</a>
                                </div>
                                <div className="col-lg-6 col-sm-12 d-flex flex-column text-center gap-4">
                                    <a href="#pricing" className="footer-link">Про нас</a>
                                    <a href="#pricing" className="footer-link">Контакти</a>
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-1 col-md-1 col-sm-0 "></div>


                        <div className="col-lg-3 col-md-3 col-sm-12  footer-el d-flex flex-column align-items-center p-3">
                            <Button className='nav-btn footer-btn'>+38(096)530-47-77</Button>
                            <p className="footer-location"><span></span> м.Львів вул. Хуторівка 45</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
