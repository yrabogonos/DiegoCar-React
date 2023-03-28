import React from "react";
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";



import Navibar from "./Navibar/navibar";
import Mainheader from "./MainHeader/mainheader";





function Header(props){
    return(
        <div className="header  p-0">
            <div className="header-wrap ">
                <Navibar data={props.data.navibar} />
                <Mainheader data={props.data.banner}/>
               
            </div>
        </div>
        
    );
} 

export default Header;