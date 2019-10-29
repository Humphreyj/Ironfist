import React from 'react';
import './Opponent.css';

const Opponent = (props) => {
    return (
        
    <div className="opponent" onClick={props.initiateDuel}>
                <h4 className="opponent-name">{props.name}</h4>
                <h4 className="opponent-level">Lvl: {props.level} {props.title}</h4>
                <h4 className="opponent-hp">HP: {props.HP}</h4>
            </div>
    
        
    );
}

export default Opponent;
