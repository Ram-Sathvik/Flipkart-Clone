import { Badge, Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";

import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right: 40px;
        align-items: center;
    }
`

const Container = styled(Button)`
    display: flex;
`

const LoginButton = styled(Button)`
    color: black;
    background: white;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`

const CustomButtons = () => {

    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(DataContext);

    const { cartItems } = useSelector(state => state.cart);

    const openDialog = () => {
        setOpen(true);
    }

    
    const navigate = useNavigate();

    return (

        

        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount}/> :
                <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            }
                    

            {/* <LoginButton variant="contained" onClick={() => openDialog()}>Seller</LoginButton> */}
            {/* <Typography style={{ marginTop: 3 }}>More</Typography> */}

            <Container style={{ background: 'black', color: 'white' }} onClick={() => navigate('/cart')}>
                <Badge badgeContent={cartItems?.length} color="success">
                    <ShoppingCartIcon />
                </Badge>
                <Typography style={{ textTransform: 'none', marginLeft: 10 }}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons;