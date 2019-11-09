import React, { useState,useEffect } from 'react';
import './App.css';
import MainSite from './containers/MainSite/MainSite';
import LandingPage from './containers/LandingPage/LandingPage';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './containers/LandingPage/Login/Login';
import Register from './containers/LandingPage/Register/Register';
import {AuthProvider} from './Auth';



function App() {

  const [player, playerInfoHandler] =useState({
    name: 'Name',
    title: 'Title',
    level: 'Player Level',
    HP: 9,
    str: 10,
    dex: 10,
    end: 10,
    gold: 55,
    inventory: [
        'Old Tankard'
        
    ],
    dueling: false
  })


  return (
    <AuthProvider>
      <div  className="App">
      <Route 
      exact 
      path='/' 
      render={props => <LandingPage {...props} 
      
       />}/>
       <Route 
       path='/login'
       component={Login}
       
       />
       <Route
       path='/register'
       render={props => <Register {...props}
       player={player}
      playerInfoHandler={playerInfoHandler}/>
      }
       />
      <PrivateRoute 
      path='/tavern' 
      render={props => <MainSite {...props} 
      player={player}
      playerInfoHandler={playerInfoHandler} /> } />
    </div>
    </AuthProvider>
  );
}

export default App;
