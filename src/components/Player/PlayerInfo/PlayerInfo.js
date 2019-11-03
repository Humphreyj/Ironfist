import React from 'react';
import './PlayerInfo.css'

const PlayerInfo = (props) => {
    return (
        <div className = 'player-info'>
            <img src="https://pbs.twimg.com/profile_images/836052964842168321/S76eOnOC.jpg" alt="Player Avatar" className="avatar"/>
            <div className="personal-info">
                <h1 className="name">{props.name}</h1>
                <div className="player-title">
                    <h3 className="title">{props.title}</h3>
                    <h3 className="level">{props.level}</h3>
                </div>
            </div>
        </div>
    );
}

export default PlayerInfo;
