import React, { useState } from 'react';
import './QuestPopup.css';

const QuestPopup = (props) => {

    
    
    
    return (
        <div className='wager-container'>
            <h3>Embark on Quest?</h3>
            <div className="quest-description">
                QUEST DESCRIPTION GOES HERE
            </div>
            {/* {quest description} */}
            <button 
            className="embark" >Embark!</button>
            <button 
            className="embark" >Decline!</button>

            
            

            
        </div>
    );
}

export default QuestPopup;
