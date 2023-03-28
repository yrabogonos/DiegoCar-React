import React from "react";
import './help.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import audi from '../../assets/img/audi_rem.png';
import DesctopItem from "./ItemDesctop/itemDesctop";
import MobileItem from "./ItemMobile/itemMobile";



function Help(props){
    return(
        <section className="help">
            <div className="container p-0">
                <div className="help-card">
                    <div className="card-wrap  container-fluid p-0">
                        <div className="card-blur container-fluid p-0">
                            <div className="row">
                                <div className="col-6 pr-5 card-col1">
                                    <div className="card-form">
                                    <h2 className="form-title">
                                        {props.data.title}
                                    </h2>
                                    <p className="form-p">
                                        {props.data.underTitle}
                                    </p>
                                    <input type="tel" className="form-input"></input>
                                    <input type='submit' value='Отримати консультацію' className="form-sub"></input>
                                    </div>
                                    <div className="reserve-space"></div>
                                   
                                </div>
                               
                                <div className="col-6 help-items">
                                    <div className="row">
                                        <div className="col-6">
                                           
                                            {props.data.items1.map(item => <DesctopItem data={item}/>)}


                                        </div>
                                        <div className="col-6 ">
                                            
                                             {props.data.items2.map(item => <DesctopItem data={item}/>)}



                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-car container-fluid p-0">
                                        <img src={audi} className='img-fluid' alt='car'></img>
                                    </div>   
                        </div>
                        
                        
                        
                    </div>
                   
                    
                </div>
                <div className="mobile">
                   <div className="container">
                        <div className="mobile-help-items">
                             <div className="row mobile-help-items-row">
                                 <div className="col-12">
                                      {props.data.items.map(item=> <MobileItem data={item}/>)}
                                 </div>
                             </div>
                         </div>
                   </div>
                </div>
            </div>
            
            
        </section>
    );
}




export default Help;