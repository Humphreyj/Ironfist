import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Player from './components/Player/Player'



function App() {

  const [playerVisible, showPlayer] = useState(false);
  const togglePlayer = () => {
    
    showPlayer(!playerVisible)
    showModal({...modals,show: modals.show = false})
    
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
        'Old Tankard'
        
    ]
  })

  const rollDice = (num) => {
    let result = 0;
     result = (Math.floor(Math.random() * num + 1));
    return result;
  }

  const gamble = (wager) => {
    let result = rollDice(20);
    console.log(result);
    if(result > 13) {
      playerInfoHandler({...player,gold: player.gold + wager});
    }else {
      playerInfoHandler({...player,gold: player.gold - wager});
    }
    
  }
  const buyDrink = (cost, item) => {
    playerInfoHandler({...player,gold: player.gold - cost})
    // playerInfoHandler({...player,inventory: player.inventory.push(item)})
    console.log(item);
  }

  const [modals,showModal] = useState({
    bar: false,
    cards: false,
    dice: false,
    duel: false,
    show: false
})

const openBar = () => {
  showModal({...modals,show: !modals.show})
    showModal({...modals,bar: !modals.bar})
    console.log(modals.show)
    
}
const openCards = () => {
    showModal({...modals,cards: !modals.cards})
    console.log(modals.show)
}
const openDice = () => {
    showModal({...modals,dice: !modals.dice})
    console.log(modals.show)
}
const openDuel = () => {
    showModal({...modals,duel: !modals.duel})
    console.log(modals.show)
}
const handleBackdrop = () => {

    showModal({...modals,show: !modals.show})
      if(modals.bar === true) {
          showModal({...modals,bar: !modals.bar})
      }else if(modals.cards === true) {
          showModal({...modals,cards: !modals.cards})
      }else if(modals.dice === true) {
          showModal({...modals,dice: !modals.dice})
      }else if(modals.duel) {
          showModal({...modals,duel: !modals.duel})
      }else if(playerVisible) {
        showPlayer(!playerVisible);
        showModal({...modals,show: !modals.show})
      }
  
      
}
useEffect(()=> {
  handleBackdrop();
  
},[])



  const menuVis = playerVisible ? 'player' : 'player-close';
  return (
    <div  className="App">
     <Header togglePlayer={togglePlayer}/>
    
     <MainContent
     modals={modals}
     gamble={gamble}
     buyDrink={buyDrink}
      player={player}
      openBar ={openBar}
      openCards={openCards}
      openDice={openDice}
      openDuel={openDuel}
      show={modals.show}
      handleBackdrop={handleBackdrop}/>

     <Player 
     player= {player}
     inventory={player.inventory}
     menuVis={menuVis}
     show={playerVisible}
     handleBackdrop={handleBackdrop} />
    </div>
  );
}

export default App;
