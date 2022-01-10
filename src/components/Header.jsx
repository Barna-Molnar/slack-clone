import React from 'react';
import { SendIcon, AccessTime, Search, HelpOutline } from '@mui/icons-material';
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const HeaderContainer = styled.div`
    background-color: var(--slack-color);
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    color: #fff;
`;
const HeaderLeft = styled.div`
    display: flex;
    flex: 0.3;
    align-items: center;
    margin-left: 20px;
     >.MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

const StyledAvatar = styled(Avatar)`
    cursor: pointer;
    transition: all 0.15s;

    &:hover {
        opacity: 0.8;
    }
`;
const HeaderSearch = styled.div`
    display: flex;
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    padding: 0 50px;
    color: gray;
    border: 1px solid gray ;
    input  {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: none;
        color: white;
    }
`;

const HeaderRight = styled.div`
    display: flex;
    flex: 0.3;
    align-items: flex-end;

    .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }

`

const Header = () => {
    const user  = useAuthState(auth)

    return (
        <HeaderContainer>
            <HeaderLeft>
                <StyledAvatar
                onClick={()=> auth.signOut()}
                src={user?.photoURL}
                alt={user?.displayName}
                />
                <AccessTime />
            </HeaderLeft>
            <HeaderSearch>
                <Search />
                <input type="text" placeholder='Search you Club' />
            </HeaderSearch>
        <HeaderRight>
            <HelpOutline/>
        </HeaderRight>
        </HeaderContainer>
    );
};

export default Header;
