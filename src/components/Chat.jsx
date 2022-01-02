import styled from '@emotion/styled';
import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';


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


`


const Chat = () => {
    const roomId = useSelector(selectRoomId)
    console.log(roomId)
    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4><strong>#Room-Name</strong></h4>
                    <StarBorderOutlined />
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlined /> Details
                    </p>
                </HeaderRight>

            </Header>
            <ChatMessages>

            </ChatMessages>
            <ChatInput
                channelId = {roomId}
            />

        </ChatContainer>
    );
};

export default Chat;
