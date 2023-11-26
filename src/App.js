import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Birthday from './Compnents/Birthday'
import Scool from './Compnents/Scool';
import Calcolator from './Compnents/Calcolator'
import Bank from './Bank';
import ToDo from './Compnents/ToDo';
import Func from './Func';
import PrintStudent from './PrintStudent';
import cardsSlice from './redux/slice'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Card from './redux/Card';

const myStore=configureStore({
  reducer:{
    cardsSlice,
  }

})





function App() {

  return (
    <>
    <div style={{backgroundColor:'crimsonl'}}>

  
     <div>hello</div>
     <Provider store={myStore}>
     {/* <ToDo/><br></br>
     <Func/>
     <PrintStudent/> */}
     <Card/>
     </Provider>

     </div>
    </>
  );
}

export default App;
