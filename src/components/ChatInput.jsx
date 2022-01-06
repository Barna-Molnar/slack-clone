import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import { db } from '../firebase'
import firebase from 'firebase/compat/app';

const ChatInputContainer = styled.div`
    
    border-radius: 20px;

    form {
        display: flex;
        position: relative;
        justify-content: center;
         input  {
            position: fixed;
            bottom: 30px;
            width: 60%;
            border: 1px solid gray;
            border-radius: 3px;
            padding: 20px;
            outline: none;
        } 

        button {
            display: none;
        }
    }
`;


const ChatInput = ({ channelId, channelName, chatRef }) => {

    const [inputValue, setInputValue] = useState('')
    const sendMessage = (e) => {
        e.preventDefault();


        if(!channelId) {
            return false
        }
        // add message to the database
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: inputValue,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "Batman",
            userPicture: "https://cdn.britannica.com/49/127649-050-CCE87173/Heath-Ledger-Joker-Christian-Bale-Batman-2008.jpg"
        });
        // clear input
        setInputValue('');
    };
    chatRef?.current.scrollIntoView({
        behavior: 'smooth'
    })
  
    return (
        <ChatInputContainer>
            <form action="">
                <input  type="text" placeholder={`Message # ${channelName}`} value={inputValue} onChange={(e)=> setInputValue(e.target.value)}  />
                <Button hidden type='submit' onClick={sendMessage}>
                    Send
                </Button>
            </form>
        </ChatInputContainer>
    );
};

export default ChatInput;
