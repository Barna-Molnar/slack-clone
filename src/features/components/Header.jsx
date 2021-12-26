import React from 'react';
import { SendIcon, AccessTime, Search, HelpOutline } from '@mui/icons-material';
import styled from 'styled-components';
import { Avatar } from '@mui/material';

const HeaderContainer = styled.div`
    color:red;
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
    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

const StyledAvatar = styled(Avatar)`
    cursor: pointer;
    transition: all 0.3s;
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
    justify-content: end;
    padding: 0 10px 0 0;
`

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <StyledAvatar />
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
