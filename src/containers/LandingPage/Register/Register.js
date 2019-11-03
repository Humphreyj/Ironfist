import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Resgister = (props) => {
    return (
        <div className='registration'>
            <h3>I'll need to know a bit about you before you can go in.</h3>
            <form>
                <label>
                    UserName
                    <input
                    name='userName'
                    maxLength='10' 
                    type="text"
                    onChange={event => {
                        props.playerInfoHandler({...props.player,name: props.player.name= event.target.value});
                    }}/>
                </label>

                <label>
                    Password:
                    <input
                    name='password' 
                    type="text"/>
                </label>
                <label>
                    Confirm Password
                    <input
                    name='confirmPassword' 
                    type="text"/>
                </label>

                <Link to='/tavern' ><button className="submit">Submit</button></Link>

            </form>
            
        </div>
    );
}

export default Resgister;
