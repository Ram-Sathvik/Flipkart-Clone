import { useState } from "react";

import { Box, Button, styled } from "@mui/material";

import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { addToCart } from '../../redux/actions/cartActions'

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const LeftContainer = styled(Box)`
    min-width: 40%;
    padding: 40px 0 0 80px;
`;

const Image = styled('img')({ 
    padding: '15px',
    width: '95%'
});

const StyledButton = styled(Button)`
    width: 48%;
    height: 50px;
    border-radius: 2px;
    background: black;
    color: white;
`

const ActionItem = ({product}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ quantity ] = useState(1);

    const { id } = product;

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    return (
        <LeftContainer>
            <Box style={{ padding: '15px', width: '90%'}}>
                <Image src={product.detailUrl} alt="product"  />
            </Box>
            <StyledButton variant="contained" onClick={() => addItemToCart()} style={{ marginRight: '10px' }}><Cart />Add to Cart</StyledButton>
            <StyledButton variant="contained"><Flash />Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;