import React from 'react';
import './Player.css';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import PlayerStats from './PlayerStats/PlayerStats';
import PlayerInventory from './PlayerInventory/PlayerInventory';
import Auxi from '../UI/Auxi/Auxi';
import Backdrop from '../UI/Backdrop/Backdrop';

const Player = (props) => {

    
    return (
        <Auxi>
            <Backdrop
            show={props.show}
            handleBackdrop={props.handleBackdrop} />
            <div className = {props.menuVis}>
            <PlayerInfo 
                name={props.player.name}
                race={props.player.race}
                title={props.player.title}
                level ={props.player.level} />
            <PlayerStats
                HP = {props.player.HP}
                str ={props.player.str}
                dex = {props.player.dex}
                end = {props.player.end} />
            <PlayerInventory 
                gold = {props.player.gold}
                inventory ={props.player.inventory} />
        </div>
        </Auxi>
    );
}

export default Player;
