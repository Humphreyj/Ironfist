import React from 'react';
import './PlayerInput.css';

const PlayerInput = (props) => {
    return (
        <div className='player-input'>
            <input  type="text"/>
            <button className="send-text">Send</button>
        </div>
    );
}

export default PlayerInput;
