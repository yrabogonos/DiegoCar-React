import React from "react";
import {useState} from "react";
import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Carousel from 'react-bootstrap/Carousel';
import kiaOptima from '../assets/img/kiaOptima.jpg';
import cherry from '../assets/img/cherry.jpg';
import citroen from '../assets/img/citroenC3.jpg';
import { Button } from "react-bootstrap";



let cars = [
    {
        img: kiaOptima,
        title: 'Kia K5 (Optima)',
        millage: 'До 90тис. км.',
        year: 2018,
        power: 163,
        volume: 2.0,
        transmission: 'Автомат',
        price1: 25090,
        price2: 18000,
    },
    {
        img: cherry,
        title: 'Cherry Tiggo',
        millage: 'До 60тис. км.',
        year: 2022,
        power: 163,
        volume: 2.0,
        transmission: 'Автомат',
        price1: 25090,
        price2: 18000,
    },
    {
        img: citroen,
        title: 'Citroen C3',
        millage: 'До 70тис. км.',
        year: 2020,
        power: 163,
        volume: 2.0,
        transmission: 'Автомат',
        price1: 25090,
        price2: 18000,
    }
];



function Carousell(){
    const [objects, setObject] = useState(cars);
    const [count, setCount] = useState(cars.length);
    
    const addSlide = (i)=>{
       return(
        <Carousel.Item>
        <div className="slide-wrap">
            <div className="slide-image">
                <img
                    className="d-block w-100"
                    src={objects[i].img}
                    alt="First slide"
                    
                />    
            </div>  
            <div className="car-descr">
                <h2 className="car-title">{objects[i].title}</h2>
                <div className="car-charac d-flex mb-4">
                    <div className="charac-name">Пробіг</div>
                    <div className="dashed"></div>
                    <div className="charac-value">{objects[i].millage}</div>
                </div>
                <div className="car-charac d-flex mb-4">
                    <div className="charac-name">Рік Випуску</div>
                    <div className="dashed"></div>
                    <div className="charac-value">{objects[i].year}</div>
                </div>
                <div className="car-charac d-flex mb-4">
                    <div className="charac-name">Потужність</div>
                    <div className="dashed"></div>
                    <div className="charac-value">{objects[i].power} к.с</div>
                </div>
                <div className="car-charac d-flex mb-4">
                    <div className="charac-name">Двигун</div>
                    <div className="dashed"></div>
                    <div className="charac-value">{objects[i].power} л</div>
                </div>
                <div className="car-charac d-flex mb-4">
                    <div className="charac-name">Коробка</div>
                    <div className="dashed"></div>
                    <div className="charac-value">{objects[i].transmission}</div>
                </div>
            </div>
            <div className="car-prices d-flex justify-content-between p-2">
                <div className="false-price d-flex flex-column">
                    <p className="price-cost">{objects[i].price1} $</p>
                    <p className="price-descr">Ціна на вторинному ринку</p>
                </div>
                <div className="true-price d-flex flex-column">
                    <p className="tprice-cost">{objects[i].price2} $</p>
                    <p className="tprice-descr">Пропозиція від нашого сайту</p>
                </div>
            </div>
           <div className="px-5">
                <Button className='slide-btn'>Підібрати Аналог</Button>
           </div>
        </div>
        </Carousel.Item>
       );
    }
    const fillCarousel = ()=>{
        let array = [];
        for(let i=0; i<count; i++){
            array.push(addSlide(i));
        }
        return array;
    }
    return(
        <section className="carousel">
            <div className="container p-0">
                <h2 className="carousel_title">Популярні варіанти для автолюбителів</h2>
              
                <Carousel>
                    {
                       fillCarousel()
                    }
                       
                        {/* <Carousel.Item>
                            <div className="slide-wrap">
                                <div className="slide-image">
                                    <img
                                        className="d-block w-100"
                                        src={kiaOptima}
                                        alt="First slide"
                                        
                                    />
                                   
                                   
                                </div>
                                
                                <div className="car-descr">
                                    <h2 className="car-title">Kia K5 (Optima)</h2>
                                    <div className="car-charac d-flex mb-4">
                                        <div className="charac-name">Пробіг</div>
                                        <div className="dashed"></div>
                                        <div className="charac-value">До 90тис. км.</div>
                                    </div>
                                    <div className="car-charac d-flex mb-4">
                                        <div className="charac-name">Рік Випуску</div>
                                        <div className="dashed"></div>
                                        <div className="charac-value">2018</div>
                                    </div>
                                    <div className="car-charac d-flex mb-4">
                                        <div className="charac-name">Потужність</div>
                                        <div className="dashed"></div>
                                        <div className="charac-value">163 к.с</div>
                                    </div>
                                    <div className="car-charac d-flex mb-4">
                                        <div className="charac-name">Двигун</div>
                                        <div className="dashed"></div>
                                        <div className="charac-value">2.0 л</div>
                                    </div>
                                    <div className="car-charac d-flex mb-4">
                                        <div className="charac-name">Коробка</div>
                                        <div className="dashed"></div>
                                        <div className="charac-value">Автомат</div>
                                    </div>
                                </div>
                                <div className="car-prices d-flex justify-content-between p-2">
                                    <div className="false-price d-flex flex-column">
                                        <p className="price-cost">25 090 $</p>
                                        <p className="price-descr">Ціна на вторинному ринку</p>
                                    </div>
                                    <div className="true-price d-flex flex-column">
                                        <p className="tprice-cost">18 000 $</p>
                                        <p className="tprice-descr">Пропозиція від нашого сайту</p>
                                    </div>
                                </div>
                               <div className="px-5">
                                    <Button className='slide-btn'>Підібрати Аналог</Button>
                               </div>
                            </div>
                        </Carousel.Item>


                        <Carousel.Item>
                            <div className="slide-wrap">
                                <div className="slide-image">
                                    <img
                                        className="d-block w-100"
                                        src={cherry}
                                        alt="First slide"
                                        
                                    />
                                   
                                   
                                </div>
                                
                                <div className="car-descr">
                                    <h2 className="car-title">Cherry Tiggo</h2>
                                    <div className="car-charac d-flex mb-4">
                                        <div className="charac-name">Пробіг</div>
                                        <div className="dashed"></div>
                                        <div className="charac-value">До 90тис. км.</div>
                                    </div>
                                    <div className="car-charac d-flex mb-4">
                                        <div className="charac-name">Рік Випуску</div>
                                        <div className="dashed"></div>
                                        <div className="charac-value">2018</div>
                                    </div>
                                    <div className="car-charac d-flex mb-4">
                                        <div className="charac-name">Потужність</div>
                                        <div className="dashed"></div>
                                        <div className="charac-value">163 к.с</div>
                                    </div>
                                    <div className="car-charac d-flex mb-4">
                                        <div className="charac-name">Двигун</div>
                                        <div className="dashed"></div>
                                        <div className="charac-value">2.0 л</div>
                                    </div>
                                    <div className="car-charac d-flex mb-4">
                                        <div className="charac-name">Коробка</div>
                                        <div className="dashed"></div>
                                        <div className="charac-value">Автомат</div>
                                    </div>
                                </div>
                                <div className="car-prices d-flex justify-content-between p-2">
                                    <div className="false-price d-flex flex-column">
                                        <p className="price-cost">25 090 $</p>
                                        <p className="price-descr">Ціна на вторинному ринку</p>
                                    </div>
                                    <div className="true-price d-flex flex-column">
                                        <p className="tprice-cost">18 000 $</p>
                                        <p className="tprice-descr">Пропозиція від нашого сайту</p>
                                    </div>
                                </div>
                               <div className="px-5">
                                    <Button className='slide-btn'>Підібрати Аналог</Button>
                               </div>
                            </div>
                        </Carousel.Item> */}
                   
      
                </Carousel>
            </div>
         
        </section>
    );
}

export default Carousell;