import React from "react";
import '../help.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";



function DesctopItem(props){
    return(
        <div className="help-item">
            <div className="help-icon">
                <img src={props.data.icon} alt='icon'></img>
            </div>
            <p className="help-text">{props.data.text}</p>
        </div>
    );
}

export default DesctopItem;