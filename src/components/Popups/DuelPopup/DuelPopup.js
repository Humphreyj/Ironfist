import React, { useState } from 'react';
import './DuelPopup.css';

const DuelPopup = (props) => {

    const [duelData, updateDuelData] = useState({
        opponents: [{
            name: "Lil' Tim",
            race: 'Human',
            title: 'Nitwit',
            level: 1,
            HP: 7,
            str: 9,
            dex: 8,
            end: 10
        },
        {
            name: "Owen",
            race: 'Human',
            title: 'Brigand',
            level: 4,
            HP: 15,
            str: 11,
            dex: 8,
            end: 12
        }
    ]
    })
    
    
    
    return (
        <div className='wager-container'>
            <h3>Looking to Duel?</h3>
            <div className="duel-description">
                {duelData.opponents.map(fighter => {
                    console.log(fighter)
                   return(
                    <div className="opponent">
                        <h4 className="opponent-name">{fighter.name}</h4>
                        <h4 className="opponent-level">Lvl: {fighter.level} {fighter.title}</h4>
                    </div>

                   ) 
                })}
            </div>
           
        </div>
    );
}

export default DuelPopup;
