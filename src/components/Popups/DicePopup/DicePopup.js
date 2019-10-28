import React, { useState } from 'react';
import './DicePopup.css';

const DicePopup = (props) => {

    
    
    
    if(props.gold <= 0) {
        return (
            <div className='wager-container'>
                <h1>Looks like you're out of gold!</h1>
            </div>
        )
    }else {
        return (
            <div className='wager-container'>
                <h3>Lets throw dice!</h3>
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
                className="roll-dice" onClick={() => props.gamble(props.wager)}>Roll 'em!</button>
    
                <h4 className="your-gold">Your gold: {props.gold}</h4>
                
    
                
            </div>
        );
    }
}

export default DicePopup;
