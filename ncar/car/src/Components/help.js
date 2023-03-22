import React from "react";
import './help.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import audi from '../assets/img/audi_rem.png';
import camera from '../assets/img/camera_icon.png';
import discount from '../assets/img/disc_icon.png';
import folder from '../assets/img/folder_icon.png';
import money from '../assets/img/icon_money.png';
import search from '../assets/img/search_icon.png';
import shield from '../assets/img/shield_icon.png';
import like from '../assets/img/like_icon.png';




function Help(){
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
                                        Допомога на усіх етапах покупки
                                    </h2>
                                    <p className="form-p">
                                        Залишіть заявку і наш менеджер вам зателефонує протягом 15 хвилин
                                    </p>
                                    <input type="tel" className="form-input"></input>
                                    <input type='submit' value='Отримати консультацію' className="form-sub"></input>
                                    </div>
                                    <div className="reserve-space"></div>
                                   
                                </div>
                                {/* <div className="col-1"></div> */}
                                <div className="col-6 help-items">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="help-item">
                                                <div className="help-icon">
                                                    <img src={like} alt='like'></img>
                                                </div>
                                                <p className="help-text">Підберемо найкращий варіант по найкращій ціні</p>
                                            </div>
                                            <div className="help-item">
                                                <div className="help-icon">
                                                    <img src={money} alt='like'></img>
                                                </div>
                                                <p className="help-text">Допоможемо купити валюту та перевести кошти за кордон</p>
                                            </div>
                                            <div className="help-item">
                                                <div className="help-icon">
                                                    <img src={folder} alt='like'></img>
                                                </div>
                                                <p className="help-text">Допоможемо зібрати усі потрібні документи</p>
                                            </div>
                                            <div className="help-item">
                                                <div className="help-icon">
                                                    <img src={shield} alt='like'></img>
                                                </div>
                                                <p className="help-text">Організуємо перевозку та страхування груза</p>
                                            </div>


                                        </div>
                                        <div className="col-6 ">
                                            <div className="help-item">
                                                <div className="help-icon">
                                                    <img src={camera} alt='like'></img>
                                                </div>
                                                <p className="help-text">Відправимо фото та відео звіт автомобіля</p>
                                            </div>
                                            <div className="help-item">
                                                <div className="help-icon">
                                                    <img src={search} alt='like'></img>
                                                </div>
                                                <p className="help-text">Наші експерти ретельно оглянуть вибраний автомобіль</p>
                                            </div>
                                            <div className="help-item">
                                                <div className="help-icon">
                                                    <img src={discount} alt='like'></img>
                                                </div>
                                                <p className="help-text">Розрахуємо податки на купівлю авто</p>
                                            </div>



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
                                     <div className="mobile-help-item">
                                         <div className="help-icon">
                                            <img src={like} alt='like'></img>
                                         </div>
                                         <p className="mhelp-text">Підберемо найкращий варіант по найкращій ціні</p>
                                     </div>
                                     <div className="mobile-help-item">
                                         <div className="help-icon">
                                            <img src={money} alt='like'></img>
                                         </div>
                                         <p className="mhelp-text">Допоможемо купити валюту та перевести кошти за кордон</p>
                                     </div>
                                     <div className="mobile-help-item">
                                         <div className="help-icon">
                                            <img src={folder} alt='like'></img>
                                         </div>
                                         <p className="mhelp-text">Допоможемо зібрати усі потрібні документи</p>
                                     </div>
                                     <div className="mobile-help-item">
                                         <div className="help-icon">
                                            <img src={shield} alt='like'></img>
                                         </div>
                                         <p className="mhelp-text">Організуємо перевозку та страхування груза</p>
                                     </div>
                                     <div className="mobile-help-item">
                                         <div className="help-icon">
                                            <img src={camera} alt='like'></img>
                                         </div>
                                         <p className="mhelp-text">Відправимо фото та відео звіт автомобіля</p>
                                     </div>
                                     <div className="mobile-help-item">
                                         <div className="help-icon">
                                            <img src={search} alt='like'></img>
                                         </div>
                                         <p className="mhelp-text">Наші експерти ретельно оглянуть вибраний автомобіль</p>
                                     </div>
                                     <div className="mobile-help-item">
                                         <div className="help-icon">
                                            <img src={discount} alt='like'></img>
                                         </div>
                                         <p className="mhelp-text">Розрахуємо податки на купівлю авто</p>
                                     </div>
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