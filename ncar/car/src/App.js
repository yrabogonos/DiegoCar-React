import React from 'react';
import './App.css';

// import * from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Process from './Components/proc'
import Header from './Components/header';
import Help from './Components/help';
import Carousell from './Components/carousel';
import Footer from './Components/footer';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";




function App() {
  return (
   <div className='root-wrap'>
       <Header />
       <Process />
       <Help />
       <Carousell />
       <Footer />
   </div>
  );
}

export default App;
