import React from "react";
import "./App.css";
function App() {
  return (
    <div className='wrapper clearfix'>
      <div className='player-0-panel active'>
        <div className='player-name' id='name-0'>
          Player 1
        </div>
        <div className='player-score' id='score-0'>
          43
        </div>
        <div className='player-current-box'>
          <div className='player-current-label'>Current</div>
          <div className='player-current-score' id='current-0'>
            11
          </div>
        </div>
      </div>
      <div className='player-1-panel'>
        <div className='player-name' id='name-1'>
          Player 2
        </div>
        <div className='player-score' id='score-1'>
          72
        </div>
        <div className='player-current-box'>
          <div className='player-current-label'>Current</div>
          <div className='player-current-score' id='current-1'>
            0
          </div>
        </div>
      </div>
      <button className='btn-new'>
        <i className='ion-ios-plus-outline'></i>New game
      </button>
      <button className='btn-roll'>
        <i className='ion-ios-loop'></i>Roll dice
      </button>
      <button className='btn-hold'>
        <i className='ion-ios-download-outline'></i>Hold
      </button>

      <img
        src={require("../asserts/dice-1.png")}
        alt='Dice'
        className='dice'
      ></img>
    </div>
  );
}

export default App;
