import React, { useState,useEffect } from 'react';
import './MainContent.css';
import Modal from '../UI/Modal/Modal';
import ChatDisplay from '../ChatDisplay/ChatDisplay';
import PlayerInput from '../PlayerInput/PlayerInput';


import ActionBar from '../ActionBar/ActionBar';


const MainContent = (props) => {



    
    return (
        <div className = 'main-content'>
            <Modal
            modals={props.modals}
            adjustGold={props.adjustGold} 
            gold={props.player.gold}
            show={props.show}
            handleBackdrop={props.handleBackdrop}
            openBar ={props.openBar}/>
            <ChatDisplay />
            <PlayerInput />
            <ActionBar
             openBar ={props.openBar}
             openCards={props.openCards}
             openDice={props.openDice}
             openQuest={props.openQuest}
              />           
        </div>
    );
}

export default MainContent;
