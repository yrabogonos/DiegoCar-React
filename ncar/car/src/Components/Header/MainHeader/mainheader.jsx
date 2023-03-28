import React from "react";
import '../header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";





import { Button} from "react-bootstrap";
import ListItem from "./MainHeaderListItem/listItem";






const Mainheader = (props)=>{
    return(
        <div className="container main-header-container">
            <div className="row main-header d-flex justify-content-between container-fluid">
                <div className="col-lg-7 col-md-12 col-sm-12  main-banner mb-3  mb-lg-0 d-flex flex-column">
                    <h2>{props.data.title} <span>{props.data.span}</span></h2>
                    <p>{props.data.underTitle}</p>
                    <ul className="banner-list">
                        {props.data.list.map(item => <ListItem item={item}/>)}
                    </ul>
                    <Button className='banner-btn mt-sm-3'>{props.data.buttonText}</Button>
                </div>
               
                <div className="col-lg-4 col-md-12 col-sm-12 container-fluid main-countries d-flex flex-column">
                    <div className="countries-item d-flex">
                        <div className='item-img-kor'>
                       
                        </div>
                        <div className="item-text">
                            <h3 className="text-header">Південна Корея</h3>
                            <p className="text-p">Найкращі європейські авто у повній комплектації</p>
                        </div>
                    </div>
                    <div className="countries-item d-flex">
                        <div className='item-img-kaz'>
                       
                        </div>
                        <div className="item-text">
                            <h3 className="text-header">Казахстан</h3>
                            <p className="text-p">Лише авто без пробігу</p>
                        </div>
                    </div>
                    <div className="countries-item d-flex">
                        <div className='item-img-oae'>
                        
                        </div>
                        <div className="item-text">
                            <h3 className="text-header">Арабські емірати</h3>
                            <p className="text-p">Унікальні автівки</p>
                        </div>
                    </div>
                    <div className="countries-item d-flex">
                        <div className='item-img-china'>
                       
                        </div>
                        <div className="item-text">
                            <h3 className="text-header">Китай</h3>
                            <p className="text-p">Найкращі китайські авто</p>
                        </div>
                    </div>

                </div>
                
           
            </div>
        </div>
    );
}

export default Mainheader;