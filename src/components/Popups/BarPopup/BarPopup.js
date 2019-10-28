import React, { useState } from 'react';
import './BarPopup.css';

const BarPopup = (props) => {

    const [barInventory,updateBarInventory] = useState(['Ale', 'Grog','Health Potion']);

    
    if(props.gold <=0) {
        return (
            <div className='bar-container'>
            <h3>You'll need gold to purchase a drink, buddy.</h3>
            
        </div>
        )
    }else {
        return (
            <div className='wager-container'>
                <h3>Need a Drink?</h3>
                <div className="bar-inventory">
                    {barInventory.map((item,i) => {
                        return <p key={i} className="bar-item">{item}</p>
                    })}
                </div>
                {/* {WagerButtons} */}
                <button 
                className="buy-drink" onClick={() => props.adjustGold(props.wager)}>Buy Drink</button>
    
                <h4 className="your-gold">Your gold: {props.gold}</h4>
                
    
                
            </div>
        );
    }
    
    
}

export default BarPopup;
