import React from 'react';
import './PlayerStats.css';

const PlayerStats = (props) => {
    return (
        <div className = 'player-stats'>
            <h2 className="title">Statistics</h2>
            <div className="player-health">
                <h4 className="hp">HP:{props.HP}</h4>
            </div>
            <div className="stats">
                <p className="stat">STR: {props.str}</p>
                <p className="stat">DEX: {props.dex}</p>
                <p className="stat">END: {props.end}</p>
            </div>
            
        </div>
    );
}

export default PlayerStats;
