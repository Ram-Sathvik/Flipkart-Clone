// import { useState } from 'react';

import { AppBar, Toolbar, Box, /*IconButton, Drawer, List, ListItem,*/ styled } from '@mui/material';

// import { Menu } from '@mui/icons-material';

import Search from './Search';
import CustomButtons from './CustomButtons';

import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background: black;
    height: 55px;
`
const Component = styled(Link)`
    margin-left: 100;
    margin-right: 100;
    color: inherit;
    text-decoration: none;
    display: flex;
`
const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
`

const Header = () => {
    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <Component to='/' style={{ marginRight: '100px' }}>
                    <h2>FlipClone</h2>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;