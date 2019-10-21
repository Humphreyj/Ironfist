import React from 'react';
import './CardPopup.css';

const CardPopup = (props) => {

    
    
    
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
            className="play-cards" onClick={() => props.adjustGold(props.wager)}>Deal 'em!</button>

            <h4 className="your-gold">Your gold: {props.gold}</h4>
            

            
        </div>
    );
}

export default CardPopup;
