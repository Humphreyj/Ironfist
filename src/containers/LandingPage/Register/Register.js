import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import fire from '../../../fire';
import './Register.css';

const Resgister = ({history,...props}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email,password,username} = event.target.elements;
        try {
            await fire
                .auth()
                .createUserWithEmailAndPassword(email.value,password.value);
                history.push('/');
        } catch (error) {
            console.log(error);
        }

        let user = fire.auth().currentUser;

        user.updateProfile({
            displayName:props.player.name
        }).then(() => {
            console.log('updated profile!' )
        }).catch(err => {
            console.log(err);
        })
    }, [history])



    return (
        <div className='registration'>
            <h3>I'll need to know a bit about you before you can go in.</h3>
            <form onSubmit={handleSignUp}>
            <label>
                    Email
                    <input
                    name='email'
                     
                    type="text"
                    
                    />
                </label>
                <label>
                    UserName
                    <input
                    name='username'
                     
                    type="text"
                    onChange={event => {
                        props.playerInfoHandler({...props.player,name: props.player.name= event.target.value});
                        let user = fire.auth().currentUser;

                        user.updateProfile({
                            displayName:event.target.value
                        }).then((displayName) => {
                            console.log( user.displayName )
                        }).catch(err => {
                            console.log(err);
                        })
                    }}
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
