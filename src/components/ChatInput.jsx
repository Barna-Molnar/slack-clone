import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app';
import { useAuthState} from 'react-firebase-hooks/auth'

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

    const [user]  = useAuthState(auth)
    const [inputValue, setInputValue] = useState('');
    const sendMessage = (e) => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }
        // add message to the database
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: inputValue,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user?.displayName,
            userPicture: user?.photoURL
        });

        chatRef?.current.scrollIntoView({
            behavior: 'smooth'
        }); 
        // clear input
        setInputValue('');
    };

    return (
        <ChatInputContainer>
            <form action="">
                <input type="text" placeholder={`Message # ${channelName}`} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <Button hidden type='submit' onClick={sendMessage}>
                    Send
                </Button>
            </form>
        </ChatInputContainer>
    );
};

export default ChatInput;
