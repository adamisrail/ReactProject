
import './App.css'
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import  Square  from './Square';
import Board from './Board';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  
  var status = "Hello"

    
      
  return (
   <>

   <div className='board-row'>

    <Board />
    <h3 className='pt-3'>{status}</h3>
    </div>
    
   </>
 )    
}

export default App;


