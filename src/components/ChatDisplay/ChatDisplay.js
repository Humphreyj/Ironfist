import React from 'react';
import './ChatDisplay.css'

const ChatDisplay = () => {
    return (
        <div className='chat-display'>
           <div className="chat-entry">
               <h4 className="user-name">StormDwarf:</h4>
               <p className="chat-message">Is there an Admin on?</p>
           </div>
        </div>
    );
}

export default ChatDisplay;
