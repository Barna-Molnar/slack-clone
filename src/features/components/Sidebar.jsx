import styled from '@emotion/styled';
import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material';
import React, { useState } from 'react';
import SidebarOptions from './SidebarOptions';

const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    display: flex;
    flex-direction: column;
    flex: 0.3;
    min-height: 100vh;
    border-top: 1px solid #49274b ;
    max-width: 260px;

    > hr {
        margin-bottom: 10px ;
        margin-top: 10px ;
        border: 1px solid #49274b;
    }
`;
const SidebarHeader = styled.div`
        display: flex;
        border-bottom: 1px solid #49274b ;
        padding: 13px;
        padding-bottom: 10px;
        width: 100%;

        > .MuiSvgIcon-root {
            padding: 8px;
            color:  #49274b ;
            font-size: 30px;
            background-color: #fff ;
            border-radius: 999px;
    }

`;
const SidebarInfo = styled.div`
    flex: 1;

    h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
        > .MuiSvgIcon-root {
            font-size: 14px;
            margin: 1px 2px 0 0;
            color: green;
        }
    }



`;

const Sidebar = () => {

    const [channelRom, setChannelRom] = useState([])

    const handleAlertInput= (name)=> setChannelRom([
        ...channelRom, name
    ])

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>REACT @-- CLUB</h2>
                    <h3>
                        <FiberManualRecord />
                        Barni Molnar
                    </h3>
                </SidebarInfo>
                <Create />
            </SidebarHeader>
            <SidebarOptions icon={InsertComment} title='Threads' />
            <SidebarOptions icon={Inbox} title='Mentiosn & reactions' />
            <SidebarOptions icon={Drafts} title='Saved items' />
            <SidebarOptions icon={BookmarkBorder} title='Channel browser' />
            <SidebarOptions icon={PeopleAlt} title='People & user groups' />
            <SidebarOptions icon={Apps} title='Apps' />
            <SidebarOptions icon={FileCopy} title='File browser' />
            <SidebarOptions icon={ExpandLess} title='Show less' />

            <hr/>
            <SidebarOptions icon={ExpandMore} title='Channels'/> 
            <hr />
            <SidebarOptions icon={Add}  addChannelOption={handleAlertInput} title='Add Channel'/> 
            {channelRom.map((channel, index)=> (
                <SidebarOptions  key={index} title={channel}/>
            ))}
        </SidebarContainer>
    );
};

export default Sidebar;
