
import './App.css'
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import  Square  from './Square';


export default function Board() {
  
  let [isClicked, setIsClicked] = useState(Array(9).fill(null));
  let [isXturn, setIsXTurn] = useState(true);

  
  function handleClick(i){


    
    if(checkWinner(isClicked)){
      console.log("Enterted win if 1111")
      return;
    }

    if (isClicked[i]){

      console.log("if | I am clicked already " +isClicked[i])

      
      return;
    }

    

    
      console.log("else | not clicked " + isClicked[i])

      const nextarray = isClicked.slice();

      if (isXturn){
        console.log('enterred if isXturntruee')
      
        nextarray[i] = 'X'
        
  
      }
      else {
        console.log('enterred if isXturn FALSE')
        
        nextarray[i] = 'O'
        
      };

    
      setIsClicked(nextarray)
      setIsXTurn(!isXturn)
   
   }

   if(checkWinner(isClicked)){
    console.log("Enterted win if 222")
    
   }

  function checkWinner(arr){

    const lines = [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6]
      ];

      for(let i = 0; i < lines.length; i++ ){
        let [a, b, c] = lines[i];
        
        if(arr[a] && arr[a] === arr[b] && arr[a] === arr[c]){
        console.log("Winnerrr "+arr[a])
        return arr[a];
        }

      }
      return null;
  }
   

    
      
  return (
   <>
   <div className='board-row'>

   <Square value={isClicked[0]} onClick={() => {handleClick(0)}}></Square>
   <Square value={isClicked[1]} onClick={() => {handleClick(1)}}></Square>
   <Square value={isClicked[2]} onClick={() => {handleClick(2)}}></Square>

   </div>
   
   <div className='board-row'>

   <Square value={isClicked[3]} onClick={() => {handleClick(3)}}></Square>
   <Square value={isClicked[4]} onClick={() => {handleClick(4)}}></Square>
   <Square value={isClicked[5]} onClick={() => {handleClick(5)}}></Square>

   </div>

   
   <div className='board-row'>

   <Square value={isClicked[6]} onClick={() => {handleClick(6)}}></Square>
   <Square value={isClicked[7]} onClick={() => {handleClick(7)}}></Square>
   <Square value={isClicked[8]} onClick={() => {handleClick(8)}}></Square>

   </div>
   </>
 )    
}
