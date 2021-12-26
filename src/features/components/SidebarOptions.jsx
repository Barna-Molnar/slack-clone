
import styled from '@emotion/styled';
import React from 'react'


const SidebarOptionsContainer = styled.div`


`;

const SidebarOptions = ({icon: Icon, title}) => {
    return (
        <SidebarOptionsContainer>
            {<Icon/>}{title}
        </SidebarOptionsContainer>
    )
}

export default SidebarOptions
