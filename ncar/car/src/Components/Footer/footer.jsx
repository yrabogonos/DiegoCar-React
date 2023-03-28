import React from "react";
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button } from "react-bootstrap";
import {NavLink} from 'react-router-dom';

function Link(props){
    return(
      <NavLink to={props.data.path} className='text-decoration-none footer-link'>{props.data.name}</NavLink>
    );
}

const Footer = (props)=>{
    return(
        <footer className="footer">
            <div className="footer-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12  footer-el d-flex flex-column">
                            <img  src={props.data.logo} class='nav-logo footer-logo pb-3' alt="logotype"/>
                            <p className="footer-cop-p">{props.data.copyright}</p>
                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-12 footer-el footer-nav">
                            <div className="row container-fluid p-3 gap-4 gap-lg-0">
                                <div className="col-lg-6 col-sm-12 d-flex flex-column text-center footer-col gap-4">
                                     {props.data.links1.map(link => <Link data={link}/>)}
                                    
                                </div>
                                <div className="col-lg-6 col-sm-12 d-flex flex-column text-center gap-4">
                                    {props.data.links2.map(link => <Link data={link}/>)}
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-1 col-md-1 col-sm-0 "></div>


                        <div className="col-lg-3 col-md-3 col-sm-12  footer-el d-flex flex-column align-items-center p-3">
                            <Button className='nav-btn footer-btn'>{props.data.phone}</Button>
                            <p className="footer-location"><span></span> {props.data.loc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
