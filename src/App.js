import React, { useState,useEffect } from 'react';
import './App.css';
import MainSite from './containers/MainSite/MainSite';
import LandingPage from './containers/LandingPage/LandingPage';
import { Route } from 'react-router-dom';



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
    <div  className="App">
      <Route 
      exact 
      path='/' 
      render={props => <LandingPage {...props} 
      player={player}
      playerInfoHandler={playerInfoHandler}
       />}/>
      <Route 
      path='/tavern' 
      render={props => <MainSite {...props} 
      player={player}
      playerInfoHandler={playerInfoHandler} /> } />
    </div>
  );
}

export default App;
