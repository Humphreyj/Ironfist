import React from 'react';
import './PlayerInventory.css';



const PlayerInventory = (props) => {
    return (
        <div className = 'player-inventory'>
            <h3 className="title">Inventory</h3>
            <p className="gold">GP: {props.gold}</p>
            <div className="items">
              
            </div>
            
        </div>
    );
}

export default PlayerInventory;
