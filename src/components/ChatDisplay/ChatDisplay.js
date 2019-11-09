import React, { useState,useEffect } from 'react';
import PlayerInput from '../PlayerInput/PlayerInput';
import Auxi from '../UI/Auxi/Auxi';
import './ChatDisplay.css'
import fire from '../../fire';


const ChatDisplay = (props) => {

    const [chatData, updateMessages] =useState({
        message: '',
        messages: []
    })

    let user = fire.auth().currentUser;

    useEffect(() => {
      fire.database().ref('messages/').on('value', (snapshot) => {
          const currentMessages = snapshot.val()

          if (currentMessages != null) {
            updateMessages({...chatData,messages: chatData.messages = currentMessages})
          }
      })
    },[])

    const addMessage = (event) => {
        
        updateMessages({...chatData,message: chatData.message = event.target.value})
        console.log(chatData.message)
    }
    const submitMessage = (event) => {
        console.log(chatData.message)
        const nextMessage = {
            id: chatData.messages.length,
            text: chatData.message
        }

        fire.database().ref('messages/'+ nextMessage.id).set(nextMessage)
        //when submitted, reconnect and add the newmessage

        // let list = Object.assign([],chatData.messages)
        // list.push(nextMessage)
        // updateMessages({...chatData,messages: chatData.messages = list})
    }

    const currentMessage = chatData.messages.map((message,i) => {
        return (
            <div key={message.id} className="chat-entry">
               <h4 className="user-name">{user.displayName}:</h4>
               <p className="chat-message">{message.text}</p>
           </div>
        )
    })
    return (
        <Auxi>
            <div className='chat-display'>    
                {currentMessage}
            </div>
            <PlayerInput
            chatData={chatData}
            addMessage={addMessage}
            submitMessage={submitMessage} />
        </Auxi>
    );
}

export default ChatDisplay;
