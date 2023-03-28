import React from "react";
import '../../header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";




function ListItem(props){
    return(
        <li>{props.item}</li>
    );
}

export default ListItem;

