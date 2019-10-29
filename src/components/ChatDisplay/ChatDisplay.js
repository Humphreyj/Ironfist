import React from 'react';
import './ChatDisplay.css'

const ChatDisplay = () => {
    return (
        <div className='chat-display'>

           <div className="chat-entry">
               <h4 className="user-name">StormDwarf:</h4>
               <p className="chat-message">Lorem ipsum dolor sit amet...</p>
           </div>
           <div className="chat-entry">
               <h4 className="user-name">GrassyGnoll:</h4>
               <p className="chat-message">Lorem ipsum dolor sit amet consectetur.</p>
           </div>
           <div className="chat-entry">
               <h4 className="user-name">BarPatron:</h4>
               <p className="chat-message">Lorem ipsum dolor sit amet?</p>
           </div>
           <div className="chat-entry">
               <h4 className="user-name">StormDwarf:</h4>
               <p className="chat-message">lol yeah.</p>
           </div>
          

        </div>
    );
}

export default ChatDisplay;
