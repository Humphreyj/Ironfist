import React from 'react';
import './MainContent.css';
import Modal from '../UI/Modal/Modal';
import DicePopup from'../Popups/DicePopup/DicePopup';

import ActionBar from '../ActionBar/ActionBar';


const MainContent = (props) => {
    return (
        <div className = 'main-content'>
            {/* <Modal><DicePopup
            adjustGold={props.adjustGold}
             gold={props.player.gold}/></Modal> */}
            <p>Chat Display</p>
            <p>Player Input</p>
            <ActionBar />           
        </div>
    );
}

export default MainContent;
