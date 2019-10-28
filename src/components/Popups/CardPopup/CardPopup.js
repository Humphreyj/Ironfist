import React from 'react';
import './CardPopup.css';

const CardPopup = (props) => {
    
    if(props.gold <= 0) {
        return (
            <div className='wager-container'>
                <h1>Looks like you're out of gold!</h1>
            </div>
        )
    }else {
        return (
            <div className='wager-container'>
                <h3>Lets play cards!</h3>
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
                className="play-cards" onClick={() => props.gamble(props.wager)}>Deal 'em!</button>
    
                <h4 className="your-gold">Your gold: {props.gold}</h4>
                
    
                
            </div>
        );
    }
}

export default CardPopup;
