import React from 'react';
import './Player.css';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import PlayerStats from './PlayerStats/PlayerStats';
import PlayerInventory from './PlayerInventory/PlayerInventory';

const Player = (props) => {

    
    return (
        <div className = {props.menuVis}>
            <PlayerInfo 
            name={props.player.name}
            race={props.player.race}
            title={props.player.title}
            level ={props.player.level} />
            <PlayerStats
            health = {props.player.health}
            str ={props.player.str}
            dex = {props.player.dex}
            end = {props.player.end} />
            <PlayerInventory 
            gold = {props.player.gold}
            inventory ={props.player.inventory} />
        </div>
    );
}

export default Player;
