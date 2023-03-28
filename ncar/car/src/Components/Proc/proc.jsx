import React from "react";
import './proc.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";

function Process(props){
    return(
        <section class="process container-fluid p-0">
            <div class="process-wrap  container-fluid ">
                <div className="proc-container">
                    <h2 className="process-title">{props.data.title}</h2>
                    <p className="process-undertitle">{props.data.underTitle}</p>
                    <div className="process-grid">
                        <div className="grid-item d-flex">
                            <div className="item-num">1</div>
                            <div className="item-descr">{props.data.items[0]}</div>
                        </div>
                        <div className="grid-item d-flex">
                            <div className="item-num">2</div>
                            <div className="item-descr">{props.data.items[1]}</div>
                        </div>
                        <div className="grid-item d-flex">
                            <div className="item-num">3</div>
                            <div className="item-descr">{props.data.items[2]}</div>
                        </div>
                        <div className="grid-item d-flex">
                            <div className="item-num">4</div>
                            <div className="item-descr">{props.data.items[3]}</div>
                        </div>
                        <div className="grid-item d-flex ">
                            <div className="item-num">5</div>
                            <div className="item-descr">{props.data.items[4]}</div>
                        </div>
                        <div className="grid-item d-flex ">
                            <div className="item-num">6</div>
                            <div className="item-descr">{props.data.items[5]}</div>
                        </div>
                        <div className="grid-item d-flex ">
                            <div className="item-num">7</div>
                            <div className="item-descr">{props.data.items[6]}</div>
                        </div>
                        <div className="grid-item d-flex ">
                            <div className="item-num">8</div>
                            <div className="item-descr">{props.data.items[7]}у</div>
                        </div>
                    </div>
                </div>
                    
            </div>
        </section>
        
    );
} 

export default Process;