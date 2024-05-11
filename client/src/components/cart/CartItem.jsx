import { Box, Button, Typography, styled } from "@mui/material";

import GroupedButton from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Component = styled(Box)`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;
    display: flex;
`

const LeftComponent = styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;
`

const RemoveButton = styled(Button)`
    margin-top: 20px;
    font-weight: 600;
    color: black;
`

const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    const removeItemfromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
        <Component>
            <LeftComponent>
                <img src={item.url} alt="product" style={{ width: 110, height: 110}}/>
                <GroupedButton />
            </LeftComponent>
            <Box style={{ margin: '20px' }}>
                <Typography style={{ fontSize: 18, fontWeight: 600 }}>{item.title.longTitle}</Typography>
                <Typography style={{ margin: '20px 0' }}>
                    <Box component="span" style={{ fontSize: 18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#388E3C' }}>{item.price.discount}</Box>
                </Typography>
                <RemoveButton onClick={() => removeItemfromCart(item.id)}>Remove</RemoveButton>
            </Box>
        </Component>
    )
}

export default CartItem;