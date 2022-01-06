import styled from '@emotion/styled';
import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import { useDocument, useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from './Message';

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;

`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    > h4 {
        display: flex;
        text-transform: lowercase;
    }

     > .MuiSvgIcon-root {
            margin-left: 10px;
            font-size: 18px;
    }
`;
const HeaderRight = styled.div`
    p {
        display: flex;
        align-items: center;
        font-size: 14px ;
        gap: 5px;
        > .MuiSvgIcon-root {
            font-size: 16px;
        }
    }
`;
const ChatMessages = styled.div`


`;


const Chat = () => {
    const chatRef = useRef()
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );

    const [roomMessages, loading] = useCollection(
        roomId &&
        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
    );
    
    useEffect(() => {
        chatRef.current?.scrollIntoView({behavior: "smooth"});
    }, [roomId, loading])


    
    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4><strong>#{roomDetails?.data().name}</strong></h4>
                    <StarBorderOutlined />
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlined /> Details
                    </p>
                </HeaderRight>

            </Header>
            <ChatMessages>
                {roomMessages?.docs.map(doc => {
                    const { timestamp, message, userPicture, user } = doc.data();

                    return (
                        <Message
                            key={doc.id}
                            message={message}
                            timestamp={timestamp}
                            user={user}
                            userImage={userPicture}

                        />
                    );
                })}
                <div ref={chatRef} style={{paddingBottom: '150px'}}/>
            </ChatMessages>
            <ChatInput
                chatRef={chatRef}
                channelName={roomDetails?.data().name}
                channelId={roomId}
            />

        </ChatContainer>
    );
};

export default Chat;
