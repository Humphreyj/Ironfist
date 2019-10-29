import React, { useState } from 'react';
import BarPopup from '../../Popups/BarPopup/BarPopup';
import CardPopup from '../../Popups/CardPopup/CardPopup';
import DicePopup from '../../Popups/DicePopup/DicePopup';
import DuelPopup from '../../Popups/DuelPopup/DuelPopup';
import Auxi from '../Auxi/Auxi';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.css'

const Modal = (props) => {

    const [wager, adjustWager] = useState(5);
    const increaseWager = () => {
        adjustWager(wager + 1);
    }
    const decreaseWager = () => {
        adjustWager(wager - 1);
    }

    

// Since I have several modals i need to Render I decided to try it this way and much to my surprise it works! The proper Modal will display depending on the state.
    if(props.modals.bar) {
        return (
            <Auxi>
                <Backdrop
                show={props.modals.show}
                handleBackdrop={props.handleBackdrop}
                handleBar={props.openBar} />    
                <div className = 'Modal'>
                    <BarPopup
                    buyDrink={props.buyDrink}
                    gold={props.gold} /> 
                </div>
            </Auxi>
            );
        }else if(props.modals.cards) {
            return (
                <Auxi>
                    <Backdrop 
                    show={props.modals.show}
                    handleBackdrop={props.handleBackdrop} />    
                    <div className = 'Modal'>
                        <CardPopup
                        wager={wager}
                        increaseWager={increaseWager}
                        decreaseWager={decreaseWager}
                        gamble={props.gamble}
                        gold={props.gold} /> 
                    </div>
                </Auxi>
                );

        }else if(props.modals.dice) {
        return (
        <Auxi>
            <Backdrop
            show={props.modals.show}
            handleBackdrop={props.handleBackdrop} />    
            <div className = 'Modal'>
                <DicePopup
                wager={wager}
                increaseWager={increaseWager}
                decreaseWager={decreaseWager}
                gamble={props.gamble}
                gold={props.gold} /> 
            </div>
        </Auxi>
        );
    }else if(props.modals.duel){
        return (
            <Auxi>
                <Backdrop
                show={props.modals.show}
                handleBackdrop={props.handleBackdrop} />    
                <div className = 'Modal'>
                    <DuelPopup
                    player={props.player}
                    dueling={props.dueling}
                    initiateDuel={props.initiateDuel}
                     /> 
                </div>
            </Auxi>
        )
        
    }else {
        return (
            <Auxi>
            
    <div className = 'Modal-closed'>
      
    </div>
    </Auxi>
        )
    }
}

export default Modal;
