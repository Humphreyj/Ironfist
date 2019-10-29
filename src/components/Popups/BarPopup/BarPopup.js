import React, { useState } from 'react';
import './BarPopup.css';

const BarPopup = (props) => {

    const [barInventory,updateBarInventory] = useState([
        {
            name: "Ale",
            cost: 3,
            stock: 3
        },
        {
            name: 'Grog',
            cost: 4,
            stock: 3
        },
        {
            name: 'Potion',
            cost: 10,
            stock: 3
        }
    ]);

    

    
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
                        return <p
                                key={i}
                                className="bar-item"
                                onClick={() =>props.buyDrink(item.cost,item.name)}>{item.name} {item.cost}G</p>
                    })}
                </div>
                
                <h4 className="your-gold">Your gold: {props.gold}</h4>
                
    
                
            </div>
        );
    }
    
    
}

export default BarPopup;
