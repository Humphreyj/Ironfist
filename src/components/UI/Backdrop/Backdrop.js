import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {

    
    return (
        props.show ?<div 
        className ='backdrop'
        onClick={props.handleBackdrop}></div> : null
        
    );
}

export default Backdrop;
