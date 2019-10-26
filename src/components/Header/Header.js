import React from 'react';
import './Header.css';
import torch from '../../img/torch.gif';


const Header = (props) => {
    return (
        <div className = 'header'> 
            <h1 className = 'title'>CHAT BOX</h1>
            <img
            src={torch}
            alt='burning torch'
            className="stats-button"
            onClick = {props.togglePlayer}></img>
        </div>
    
        
    )
}

export default Header
