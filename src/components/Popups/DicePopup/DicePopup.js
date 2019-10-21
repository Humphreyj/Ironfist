import React, { useState } from 'react';
import './DicePopup.css';

const DicePopup = (props) => {

    
    
    
    return (
        <div className='wager-container'>
            <h3>Wanna play Dice?</h3>
            <div className="wager-buttons">
                <button 
                onClick ={props.decreaseWager}
                className="decrease wager-btn">-</button>
                <p className="wager">{props.wager}</p>
                <button
                onClick = {props.increaseWager}
                 className="increase wager-btn">+</button>
            </div>
            {/* {WagerButtons} */}
            <button 
            className="roll-dice" onClick={() => props.adjustGold(props.wager)}>Roll 'em!</button>

            <h4 className="your-gold">Your gold: {props.gold}</h4>
            

            
        </div>
    );
}

export default DicePopup;
