import React from 'react';
import './PlayerInventory.css';



const PlayerInventory = (props) => {

    console.log(props.inventory)
    return (
        <div className = 'player-inventory'>
            <h3 className="title">Inventory</h3>
            <p className="gold">GP: {props.gold}</p>
            <div className="items">
              {props.inventory.map((item,i) => {
                  return (<p key={i}>{item}</p>)
              })}
            </div>
            
        </div>
    );
}

export default PlayerInventory;
