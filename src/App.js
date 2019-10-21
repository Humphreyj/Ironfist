import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Player from './components/Player/Player'
// import Backdrop from './components/Backdrop/Backdrop';


function App() {

  const [playerVisible, showPlayer] = useState(false);
  const togglePlayer = () => {
    
    showPlayer(!playerVisible)
  }
  //Handles showing the player menu on mobile

  const [player, playerInfoHandler] =useState({
    name: 'Name',
    race: 'Elf',
    title: 'Title',
    level: 'Player Level',
    health: 9,
    str: 10,
    dex: 10,
    end: 10,
    gold: 55,
    inventory: [
        'Old Tankard',
        'Rusty Sword',
        'Leather Armor'
    ]
  })

  const adjustGold = (wager) => {
    playerInfoHandler({...player,gold: player.gold + wager});
  }

  


  const menuVis = playerVisible ? 'player' : 'player-close';
  return (
    <div  className="App">
     <Header togglePlayer={togglePlayer}/>
     <MainContent
     adjustGold={adjustGold}
      player={player}/>
     <Player player= {player}menuVis={menuVis} />
    </div>
  );
}

export default App;
