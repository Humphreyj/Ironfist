import React, { useState,useEffect } from 'react';
import './MainContent.css';
import Modal from '../UI/Modal/Modal';
import ChatDisplay from '../ChatDisplay/ChatDisplay';



import ActionBar from '../ActionBar/ActionBar';


const MainContent = (props) => {



    
    return (
        <div className = 'main-content'>
            <Modal
            player={props.player}
            modals={props.modals}
            gamble={props.gamble}
            buyDrink={props.buyDrink}
            dueling={props.player.dueling}
            initiateDuel={props.initiateDuel} 
            gold={props.player.gold}
            show={props.show}
            handleBackdrop={props.handleBackdrop}
            openBar ={props.openBar}/>
            <ChatDisplay
            player={props.player} />
            
            <ActionBar
             openBar ={props.openBar}
             openCards={props.openCards}
             openDice={props.openDice}
             openDuel={props.openDuel}
             
              />           
        </div>
    );
}

export default MainContent;
