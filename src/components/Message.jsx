import styled from '@emotion/styled';
import React from 'react';

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img  {
        /* object-fit: contain; */
        height: 50px;
        width: 50px;
        border-radius: 8px;
        margin-right: 10px;
    }

`;
const MessageInfo = styled.div`

    > h4 > span {
        color: gray;
        font-weight: 300;
        font-size: 10px;
    }

`;

const Message = ({ user, userImage, timestamp, message }) => {
    console.log(userImage);
    return (
        <MessageContainer>
            <img src={userImage} alt='userfoto' />
            <MessageInfo>
                <h4>
                    {user}{' '}
                    <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                {message}
            </MessageInfo>
        </MessageContainer>
    );
};

export default Message;
