import React, { useState } from 'react';
import './DuelPopup.css';
import Opponent from './Opponent/Opponent';
import DuelScreen from './DuelScreen/DuelScreen';

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
            
        }
    ]
    })
    
    
    
    
    {
        if(props.dueling) {
            return (
                <DuelScreen 
                player={props.player}
                name={duelData.opponents[0].name}
                level={duelData.opponents[0].level}
                title={duelData.opponents[0].title}
                HP={duelData.opponents[0].HP}
                initiateDuel={props.initiateDuel}/>
            )
    }else {
        return (
            <div className='wager-container'>
                <h3>Looking to Duel?</h3>
                <div className="duel-description">
                    {duelData.opponents.map((fighter,i) => {
                        console.log(fighter)
                       return(
                           <Opponent
                           key={i}
                           name={fighter.name}
                           level={fighter.level}
                           title={fighter.title}
                           HP={fighter.HP}
                           initiateDuel={props.initiateDuel}
                            />
                       ) 
                    })}
                </div>
               
            </div>
        );
    }
}
}

export default DuelPopup;
