import React from 'react';
import './App.css';

import {useState} from "react";
import cashloan from './components/header/loan/moneyloan/cashloan';



function Mytouch(){
const [count, setCount] =useState(0);

function Clicking(){
  setCount(count+1);
  }
return (
<button onClick={Clicking} >
Clicked {count} times
</button>
);
}

export default function App(){ 
  return (
    <div className="App">
      
      <p><Mytouch /></p>
      <p><Mytouch /></p>
      <p><cashloan /></p>
      
      
    </div>
  );
}

 
