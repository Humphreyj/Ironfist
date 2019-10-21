import React from 'react';
import './ActionBar.css';

const actionBar = (props) => {
    return (
        <div className='action-bar'>
            <button className="action-btn">Bar</button>
            <button className="action-btn">Cards</button>
            <button className="action-btn">Dice</button>
            <button className="action-btn">Quest</button>  
        </div>
    );
}

export default actionBar;
