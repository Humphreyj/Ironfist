import React, { useCallback,useContext } from 'react';
import {withRouter, Redirect} from 'react-router';
import { Link } from 'react-router-dom';
import './Login.css';
import fire from '../../../fire';
import { AuthContext } from '../../../Auth';
import { app } from 'firebase';

const Login = ({history}) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} =event.target.elements;
            try {
                await fire
                .auth()
                .signInWithEmailAndPassword(email.value,password.value);
                history.push('/');
            } catch (error) {
                console.log(error)
            }
        },
        [history]
    )
    const { currentUser } =useContext(AuthContext);

    if(currentUser) {
        return <Redirect to='/tavern' />
    }
    return (
        <div className='Login'>
            <form onSubmit={handleLogin}>
                <label>
                    Email 
                <input
                
                name='email'
                type="text"
                // onChange={event => {
                //     props.playerInfoHandler({...props.player,name: props.player.name= event.target.value});
                // }}
                />
                </label>

                <label>
                    Password: 
                <input
                id='passwordInput'
                name='password' 
                type="password"/>
                </label>

                <button type='submit' className="submit">Submit</button>
            </form>
            
        </div>
    );
}

export default Login;
