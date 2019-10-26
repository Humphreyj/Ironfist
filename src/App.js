import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Player from './components/Player/Player'



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

  const [modals,showModal] = useState({
    bar: false,
    cards: false,
    dice: false,
    quest: false,
    show: false
})

const openBar = () => {
    showModal({...modals,bar: !modals.bar})
    console.log('butt');
    
}
const openCards = () => {
    showModal({...modals,cards: !modals.cards})
}
const openDice = () => {
    showModal({...modals,dice: !modals.dice})
}
const openQuest = () => {
    showModal({...modals,quest: !modals.quest})
}
const handleBackdrop = () => {
    showModal({...modals,show: !modals.show})
    if(modals.bar === true) {
        showModal({...modals,bar: !modals.bar})
    }else if(modals.cards === true) {
        showModal({...modals,cards: !modals.cards})
    }else if(modals.dice === true) {
        showModal({...modals,dice: !modals.dice})
    }else if(modals.quest) {
        showModal({...modals,quest: !modals.quest})
    }else if(playerVisible) {
      showPlayer(!playerVisible)
    }
}

useEffect(() => {
  handleBackdrop();
},[])
  

  const menuVis = playerVisible ? 'player' : 'player-close';
  return (
    <div  className="App">
     <Header togglePlayer={togglePlayer}/>
    
     <MainContent
     modals={modals}
     adjustGold={adjustGold}
      player={player}
      openBar ={openBar}
      openCards={openCards}
      openDice={openDice}
      openQuest={openQuest}
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
