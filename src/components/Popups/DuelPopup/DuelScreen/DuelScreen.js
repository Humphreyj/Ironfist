import React from 'react';
import Opponent from '../Opponent/Opponent';
import PlayerDuelCard from '../PlayerDuelCard/PlayerDuelCard';
import './DuelScreen.css';

const DuelScreen = (props) => {
    return (
        <div className='duel-screen'>
            <div className="combatants">
                <PlayerDuelCard
                player={props.player} />
                <Opponent
                name={props.name}
                level={props.level}
                title={props.title}
                HP={props.HP}/>
            </div>
            
            <div className="duel-control">
                <button className="duel-control Block">Block</button>
                <button className="duel-control Attack">Attack</button>
                <button className="duel-control Attack"
                onClick={props.initiateDuel}>Surrender</button>
            </div>
            
            
            
        </div>
    );
}

export default DuelScreen;
