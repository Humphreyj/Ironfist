import React, { useState,useEffect } from 'react';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import Player from '../../components/Player/Player';

const MainSite = (props) => {

    const [playerVisible, showPlayer] = useState(false);
    const togglePlayer = () => {
      
      showPlayer(!playerVisible)
      showModal({...modals,show: modals.show = false})
      
    }
    //Handles showing the player menu 
  
   
   
    //I placed the player State here because it needs to be passed down to multiple components.
  
    const rollDice = (num) => {
      let result = 0;
       result = (Math.floor(Math.random() * num + 1));
      return result;
    }
    //Dice function can be used in many ways. i.e gambling or combat.
  
    const gamble = (wager) => {
      let result = rollDice(20);
      console.log(result);
      if(result > 13) {
        props.playerInfoHandler({...props.player,gold: props.player.gold + wager});
      }else {
        props.playerInfoHandler({...props.player,gold: props.player.gold - wager});
      }
    }
    //This placeholder gamble function handles both cards and dice.
    const buyDrink = (cost, item) => {
      props.playerInfoHandler({...props.player,gold: props.player.gold - cost})
      // playerInfoHandler({...player,inventory: player.inventory.push(item.name)})
      console.log(item);
    }
  
    const initiateDuel = () => {
      props.playerInfoHandler({...props.player,dueling: !props.player.dueling})
      //I decided to make dueling a player proerty and handle all the state for the player in one spot. It also needs to be passed to multiple components.
    }
  
    const [modals,showModal] = useState({
      bar: false,
      cards: false,
      dice: false,
      duel: false,
      show: false
  })
  //This handles the state for the Modals. If one is active it triggers the modal conditional in Modal.js Can potentially be moved out of App.js
  
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
    //There is definetly a much cleaner way to do these two sections.
        
  }
  useEffect(()=> {
    handleBackdrop();
    //I'm not exactly sure why this works, but it breaks if I delete it.
    
  },[])
  
  
  
    const menuVis = playerVisible ? 'player' : 'player-close';
    return (
        <div  className="App">
     <Header togglePlayer={togglePlayer}/>
    
     <MainContent
     modals={modals}
     gamble={gamble}
     buyDrink={buyDrink}
     initiateDuel={initiateDuel}
      player={props.player}
      openBar ={openBar}
      openCards={openCards}
      openDice={openDice}
      openDuel={openDuel}
      show={modals.show}
      handleBackdrop={handleBackdrop}/>

     <Player 
     player= {props.player}
     inventory={props.player.inventory}
     menuVis={menuVis}
     show={playerVisible}
     handleBackdrop={handleBackdrop} />
    </div>
    );
}

export default MainSite;
