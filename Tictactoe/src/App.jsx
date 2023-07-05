
import './App.css'
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import  Square  from './Square';
import Board from './Board';
import 'bootstrap/dist/css/bootstrap.css';



function App() {

  var statusText = "Hello"

  let [history, setHistory] = useState([Array(9).fill(null)])
  let [isXturn, setIsXTurn] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  
  let currentGame = history[currentMove]

  function handleOnPlay(currentGame){
    const nextHistory = [...history.slice(0, currentMove + 1), currentGame];
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
    setIsXTurn(!isXturn);
    
  }

  function jumpTo(jumpLoc){
    
      setCurrentMove(jumpLoc);

      setIsXTurn(jumpLoc % 2 === 0);
      // Hello
  }

  const moves = history.map((squareValue, move) => {
  
    let desc = ""

    if (move < 0){
      desc = "Move to move #" +move;
    }
    else{
      
      desc = "Game start at " +move;
    }

    return(
      <li>
        <button onClick={() => {jumpTo(move)}}>{desc}</button>
      </li>
    )

  }

  )

  
  
  
  return (
   <>

    <div className='board-row'>

    <Board isXturn={isXturn} isClicked={currentGame} onPlay={handleOnPlay}/>
    <h3 className='pt-3'>{statusText}</h3>
    </div>
    <div className='game-info'>
      <ol>
        {moves}
      </ol>
    </div>
   </>
 )    
  }

export default App;


