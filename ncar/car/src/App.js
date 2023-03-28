import React from 'react';
import './App.css';

// import * from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Process from './Components/Proc/proc'
import Header from './Components/Header/header';
import Help from './Components/Help/help';
import Carousell from './Components/Carousel/carousel';
import Footer from './Components/Footer/footer';
import Plug from './Components/Plug/plug';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Routes, Route} from 'react-router-dom';




function App(props) {
  return (
   <div className='root-wrap'>
       {/* <Header data={props.data.mainHeader}/>
       <Process data={props.data.proc}/>
       <Help data = {props.data.help}/>
       <Carousell data={props.data.carousel} />
       <Footer data={props.data.footer}/> */}
       <Routes >
          <Route path='/DiegoCar-React/' element={
           [ <Header data={props.data.mainHeader}/>, <Process data={props.data.proc}/>,
             <Help data = {props.data.help}/>, <Carousell data={props.data.carousel} />, <Footer data={props.data.footer}/>]
          }/>
          <Route path='/DiegoCar-React/kaz' element={<Plug />}/>
          <Route path='/DiegoCar-React/oae' element={<Plug />}/>
          <Route path='/DiegoCar-React/ch' element={<Plug />}/>
          <Route path='/DiegoCar-React/about' element={<Plug />}/>
          <Route path='/DiegoCar-React/contacts' element={<Plug />}/>
       </Routes>
      
   </div>
  );
}

export default App;
