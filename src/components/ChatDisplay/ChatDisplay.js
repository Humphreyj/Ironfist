import React from 'react';
import './ChatDisplay.css'

const ChatDisplay = () => {
    return (
        <div className='chat-display'>

           <div className="chat-entry">
               <h4 className="user-name">StormDwarf:</h4>
               <p className="chat-message">Is there an Admin on?</p>
           </div>
           <div className="chat-entry">
               <h4 className="user-name">GrassyGnoll:</h4>
               <p className="chat-message">Not right now.</p>
           </div>
           <div className="chat-entry">
               <h4 className="user-name">BarPatron:</h4>
               <p className="chat-message">This is some sweey dummy data.</p>
           </div>
           <div className="chat-entry">
               <h4 className="user-name">StormDwarf:</h4>
               <p className="chat-message">lol yeah.</p>
           </div>
           <div className="chat-entry">
               <h4 className="user-name">CleverUserName:</h4>
               <p className="chat-message">Wanna Duel?</p>
           </div>

        </div>
    );
}

export default ChatDisplay;
