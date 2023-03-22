import React from "react";
import './proc.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";

function Process(){
    return(
        <section class="process container-fluid p-0">
            <div class="process-wrap  container-fluid ">
                <div className="proc-container">
                    <h2 className="process-title">Процес замовлення та <br></br> покупки авто</h2>
                    <p className="process-undertitle">Із Південної Кореї в компанії Diego</p>
                    <div className="process-grid">
                        <div className="grid-item d-flex">
                            <div className="item-num">1</div>
                            <div className="item-descr">Попередня консультація</div>
                        </div>
                        <div className="grid-item d-flex">
                            <div className="item-num">2</div>
                            <div className="item-descr">Заключення договору</div>
                        </div>
                        <div className="grid-item d-flex">
                            <div className="item-num">3</div>
                            <div className="item-descr">Підбір авто за бюджетом</div>
                        </div>
                        <div className="grid-item d-flex">
                            <div className="item-num">4</div>
                            <div className="item-descr">Виїздна діагностика обраного автомобіля</div>
                        </div>
                        <div className="grid-item d-flex ">
                            <div className="item-num">5</div>
                            <div className="item-descr">Фото/відео звіт на а/м обраного авто</div>
                        </div>
                        <div className="grid-item d-flex ">
                            <div className="item-num">6</div>
                            <div className="item-descr">Оплата а/м в Корею</div>
                        </div>
                        <div className="grid-item d-flex ">
                            <div className="item-num">7</div>
                            <div className="item-descr">Відправка а/м в порт</div>
                        </div>
                        <div className="grid-item d-flex ">
                            <div className="item-num">8</div>
                            <div className="item-descr">Розмитнення авто та достака до Вашого дому</div>
                        </div>
                    </div>
                </div>
                    
            </div>
        </section>
        
    );
} 

export default Process;