import React from 'react';
import './ActionBar.css';

const actionBar = (props) => {
    return (
        <div className='action-bar'>
            <button
            onClick={props.openBar}
             className="action-btn">Bar</button>
            <button
            onClick={props.openCards}
             className="action-btn">Cards</button>
            <button
            onClick = {props.openDice} 
            className="action-btn">Dice</button>
            <button
            dueling={props.dueling}
            onClick={props.openDuel}
             className="action-btn">Duel</button>  
        </div>
    );
}

export default actionBar;
