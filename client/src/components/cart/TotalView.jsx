import { useEffect, useState } from "react";

import { Box, Typography, styled } from "@mui/material";

const Heading = styled(Box)`
    padding: 15px 24px;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;
`

const Container = styled(Box)`
    padding: 15px 24px;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
    & > h3 {
        margin-bottom: 20px;
    }
`

const Price = styled(Box)`
    float: right;
`

const TotalView = ({ cartItems }) => {

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [cartItems]);

    const totalAmount = () => {
        let price=0, discount = 0;
        cartItems.map(item => {
            price += item.price.mrp
            discount += (item.price.mrp - item.price.cost)
        })
        setPrice(price);
        setDiscount(discount);
    }

    return (
        <Box>
            <Heading>
                <Typography>PRICE DETAILS</Typography>
            </Heading>
            <Container>
                <Typography>Price ({cartItems.length} item)
                    <Price component="span">₹{price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component="span">-₹{discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">₹40</Price>
                </Typography>
                <Typography variant="h6">Total Amount
                    <Price component="span">₹{price - discount + 40}</Price>
                </Typography>
                <Typography>You will save ₹{discount-40} on this order</Typography>
            </Container>
        </Box>
    )
}

export default TotalView;