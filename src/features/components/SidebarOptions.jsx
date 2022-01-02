
import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { db } from '../../firebase';



const SidebarOptionsContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 3px;
    cursor: pointer;
    gap: 10px;
    transition: all 0.3s ease;
    border-left: 2px solid transparent;
    
    h3 {
        font-weight: 600;
    }
    
    :hover {
        opacity: 0.9;
        background-color: #340e36;
        border-color: #fff;
    }
    
    > .MuiSvgIcon-root {
        padding: 10px;
        font-size: 35px;
    }
    
    
    `;
const SidebarOptionsChannel = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 3px;

    span {
        font-size: 15px;
        font-weight: 600;
        padding: 10px;
        height: 35px;
        width: 35px;
    }
    
    `;

const SidebarOptions = ({ icon: Icon, title, addChannelOption }) => {

    const addChannel = () => {
        const channelName = prompt('Please enter a channelName');

        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            });
        }
    };

    const selectChannel = () => {

    };


    return (
        <SidebarOptionsContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon />}

            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionsChannel>
                    <span>#</span><h3>{title}</h3>
                </SidebarOptionsChannel>)}
        </SidebarOptionsContainer>
    );
};

export default SidebarOptions;
