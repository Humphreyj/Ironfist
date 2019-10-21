import React from 'react';
import './Header.css';


const Header = (props) => {
    return (
        <div className = 'header'> 
            <h1 className = 'title'>CHAT BOX</h1>
            <button
            className="stats-button"
            onClick = {props.togglePlayer}>Stats</button>
        </div>
    
        
    )
}

export default Header
