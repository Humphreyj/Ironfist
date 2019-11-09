import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = (props) => {

   

    return (
        <div className='landing-page'>
            <h1 className="welcome">Welcome To the Ironfist Tavern!</h1>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatibus accusantium sit enim minima nobis exercitationem doloremque minus distinctio ea voluptate beatae laboriosam commodi in et optio, incidunt qui ducimus.</p>
            <div className="landing-buttons">
                <Link to='/register'><button className="register">Register</button></Link>
                <Link to='/login'><button className="log-in">Log In</button></Link>
                
                
            </div>
            
        </div>
    );

    
}

export default LandingPage;
