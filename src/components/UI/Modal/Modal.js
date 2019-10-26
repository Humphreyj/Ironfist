import React, { useState } from 'react';
import BarPopup from '../../Popups/BarPopup/BarPopup';
import CardPopup from '../../Popups/CardPopup/CardPopup';
import DicePopup from '../../Popups/DicePopup/DicePopup';
import QuestPopup from '../../Popups/QuestPopup/QuestPopup';
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
                    adjustGold={props.adjustGold}
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
                        adjustGold={props.adjustGold}
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
                adjustGold={props.adjustGold}
                gold={props.gold} /> 
            </div>
        </Auxi>
        );
    }else if(props.modals.quest){
        return (
            <Auxi>
                <Backdrop
                show={props.modals.show}
                handleBackdrop={props.handleBackdrop} />    
                <div className = 'Modal'>
                    <QuestPopup
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
