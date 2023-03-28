import React from "react";
import '../help.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";


function MobileItem(props){
    return(
        <div className="mobile-help-item">
            <div className="help-icon">
               <img src={props.data.icon} alt='like'></img>
            </div>
            <p className="mhelp-text">{props.data.text}</p>
        </div>
    );
}

export default MobileItem;