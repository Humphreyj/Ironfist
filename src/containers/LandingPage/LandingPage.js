import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login/Login'
import Register from './Register/Register';
import './LandingPage.css';

const LandingPage = (props) => {

    const [status, setStatus] = useState({
        login: false,
        register: false
    })
    const loginHandler = () => {
        setStatus({...status,login: !status.login});
        
    }
    const registerHandler = () => {
        setStatus({...status,register: !status.register});
        
    }
    console.log(status.login)
    console.log(status.register)
    {
        if(status.login) {
            return (
                <Login
                player={props.player}
                playerInfoHandler={props.playerInfoHandler} />
            )
        }else if(status.register) {
            return (
                <Register 
                player={props.player}
                playerInfoHandler={props.playerInfoHandler} />
            )
        }else {
            return (
                <div className='landing-page'>
                    <h1 className="welcome">Welcome To the Ironfist Tavern!</h1>
                    <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatibus accusantium sit enim minima nobis exercitationem doloremque minus distinctio ea voluptate beatae laboriosam commodi in et optio, incidunt qui ducimus.</p>
                    <div className="landing-buttons">
                        <button
                         onClick={registerHandler}
                         className="register">Register</button>
                        <button
                        onClick={loginHandler} 
                        className="log-in">Log In</button>
                    </div>
                    
                </div>
            );
        }
    }
}

export default LandingPage;
