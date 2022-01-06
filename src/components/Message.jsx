 import styled from '@emotion/styled';
import React from 'react'

const MessageContainer = styled.div`


`

const Message = ({user, userImage, timestamp, message}) => {
    return (
        <MessageContainer>
            {message}
        </MessageContainer>
    )
}

export default Message
