import React from 'react';
import './BarPopup.css';

const BarPopup = (props) => {

    
    
    
    return (
        <div className='wager-container'>
            <h3>Need a Drink?</h3>
            <div className="bar-inventory">
                INVENTORY GOES HERE
            </div>
            {/* {WagerButtons} */}
            <button 
            className="buy-drink" onClick={() => props.adjustGold(props.wager)}>Buy Drink</button>

            <h4 className="your-gold">Your gold: {props.gold}</h4>
            

            
        </div>
    );
}

export default BarPopup;
