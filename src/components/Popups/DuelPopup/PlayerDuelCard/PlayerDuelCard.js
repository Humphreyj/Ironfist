import React from 'react';
import './PlayerDuelCard.css';

const PlayerDuelCard = (props) => {
    return (
        <div className='player-duel-card'>
            <h4 className="p-name">{props.player.name}</h4>
            <h4 className="p-level">{props.player.level}</h4>
            <h4 className="p-hp">HP: {props.player.HP}</h4>
            
        </div>
    );
}

export default PlayerDuelCard;
