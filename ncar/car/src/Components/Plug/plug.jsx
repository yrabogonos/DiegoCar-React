import React from "react";
import './plug.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import plug from '../../assets/img/plug.jpg';


function Plug(){
    return(
        <div className="plug-wrap">
            <div className="container">
                <h2>у розробці</h2>
                <img src={plug} className='plugimg' alt="plug"></img>
                <p className="plug-p">Наш сайт в розробці, але ми готові до роботи!</p>
            </div>
        </div>
    );
}

export default Plug;