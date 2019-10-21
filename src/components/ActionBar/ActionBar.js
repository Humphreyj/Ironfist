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
            onClick={props.openQuest}
             className="action-btn">Quest</button>  
        </div>
    );
}

export default actionBar;
