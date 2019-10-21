import React, { useState } from 'react';
import './DicePopup.css';

const DicePopup = (props) => {

    const [wager, adjustWager] = useState(5);
    const increaseWager = () => {
        adjustWager(wager + 1);
    }
    const decreaseWager = () => {
        adjustWager(wager - 1);
    }
    
    
    return (
        <div className='wager-container'>
            <h3>Wanna play Dice?</h3>
            <div className="wager-buttons">
                <button 
                onClick ={decreaseWager}
                className="decrease wager-btn">-</button>
                <p className="wager">{wager}</p>
                <button
                onClick = {increaseWager}
                 className="increase wager-btn">+</button>
            </div>
            {/* {WagerButtons} */}
            <button 
            className="roll-dice" onClick={() => props.adjustGold(wager)}>Roll 'em!</button>

            <h4 className="your-gold">Your gold: {props.gold}</h4>
            

            
        </div>
    );
}

export default DicePopup;
