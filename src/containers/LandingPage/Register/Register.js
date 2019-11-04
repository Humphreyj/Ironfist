import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import fire from '../../../fire';
import './Register.css';

const Resgister = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email,password,username} = event.target.elements;
        try {
            await fire
                .auth()
                .createUserWithEmailAndPassword(email.value,password.value);
        } catch (error) {
            console.log(error);
        }
    }, [history])
    return (
        <div className='registration'>
            <h3>I'll need to know a bit about you before you can go in.</h3>
            <form onSubmit={handleSignUp}>
                <label>
                    UserName
                    <input
                    name='email'
                    maxLength='10' 
                    type="text"
                    // onChange={event => {
                    //     props.playerInfoHandler({...props.player,name: props.player.name= event.target.value});
                    // }}
                    />
                </label>

                <label>
                    Password:
                    <input
                    name='password' 
                    type="password"/>
                </label>
               

                <button type='submit' className="submit">Submit</button>

            </form>
            
        </div>
    );
}

export default Resgister;
