import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = (props) => {
    return (
        <div className='Login'>
            <form>
                <label>
                    Username: 
                <input
                id='usernameInput'
                name='username'
                maxLength= '10' 
                type="text"
                onChange={event => {
                    props.playerInfoHandler({...props.player,name: props.player.name= event.target.value});
                }}/>
                </label>

                <label>
                    Password: 
                <input
                id='passwordInput'
                name='password'
                maxLength= '10' 
                type="text"/>
                </label>

                <Link to='/tavern' ><button className="submit">Submit</button></Link>
            </form>
            
        </div>
    );
}

export default Login;
