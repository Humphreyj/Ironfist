import React, { useState } from 'react';
import './MainContent.css';
import Modal from '../UI/Modal/Modal';


import ActionBar from '../ActionBar/ActionBar';


const MainContent = (props) => {

    const [modals,showModal] = useState({
        bar: false,
        cards: false,
        dice: false,
        quest: false
    })
    const openBar = () => {
        showModal({...modals,bar: !modals.bar})
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
    return (
        <div className = 'main-content'>
            <Modal
            modals={modals}
            adjustGold={props.adjustGold} 
            gold={props.player.gold}/>
            <p>Chat Display</p>
            <p>Player Input</p>
            <ActionBar
             openBar ={openBar}
             openCards={openCards}
             openDice={openDice}
             openQuest={openQuest} />           
        </div>
    );
}

export default MainContent;
