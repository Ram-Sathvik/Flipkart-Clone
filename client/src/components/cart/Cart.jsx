import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import TotalView from "./TotalView";

import { Box, Button, Grid, Typography, styled } from '@mui/material';

const Container = styled(Grid)`
    padding: 30px 135px;
`

const Header = styled(Box)`
    padding: 15px 24px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;
`

const Order = styled(Box)`
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;
`

const Cart = () => {

    const { cartItems } = useSelector(state => state.cart);

    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <Grid item lg={9} md={9} sm={12} xs={12} style={{ paddingRight: '15px' }}>
                            <Header>
                                <Typography>My Cart ({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} />
                                ))
                            }
                            <Order style={{ padding: '16px 22px', display: 'flex' }}>
                                <Button variant="contained" style={{ background: 'black', color: 'white' }}>Remove All</Button>
                                <Button variant="contained" style={{ background: 'black', color: 'white', display: 'flex', marginLeft: 'auto' }}>Place Order</Button>
                            </Order>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView cartItems={cartItems}/>
                        </Grid>
                    </Container>
                :
                    <Box style={{marginLeft: '43%', marginTop: '5%' }}><h1>Cart is Empty</h1></Box>
            }
        </>
    )
}

export default Cart;