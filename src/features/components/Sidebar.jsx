import styled from '@emotion/styled';
import { Apps, BookmarkBorder, Create, Drafts, ExpandLess, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material';
import React from 'react';
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
        </SidebarContainer>
    );
};

export default Sidebar;
