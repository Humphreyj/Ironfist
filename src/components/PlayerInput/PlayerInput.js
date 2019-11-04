import React from 'react';
import './PlayerInput.css';

const PlayerInput = (props) => {
    return (
        <div className='player-input'>
            <input
            onChange={props.addMessage} 
            type="text"/>
            <button 
            onClick={props.submitMessage}
            className="send-text">Send</button>
        </div>
    );
}

export default PlayerInput;
