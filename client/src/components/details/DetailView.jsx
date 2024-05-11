import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../redux/actions/productActions";
import ActionIem from "./ActionItem";
import { Box, Typography, Grid, styled } from "@mui/material";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
    background: #F2F2F2;
    margin-top: 55px;
`

const Container = styled(Grid)`
    background: #FFFFFF;
    display: flex;
`
const RightContainer = styled(Grid)`
    margin-top: 50px;
`

const DetailView = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id));
    }, [dispatch, id, product, loading])

    return (
        <Component>
            {    
                product && Object.keys(product).length &&
                    <Container container>
                        <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ActionIem product={product} />
                        </Grid>
                        <RightContainer item lg={8} md={8} sm={8} xs={12}>
                            <Typography style={{ fontSize: 22, fontWeight: 600 }}>{product.title.longTitle}</Typography>
                            <Typography>
                                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                                <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                                <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount}</Box>
                            </Typography>
                            <ProductDetail product={product}/>
                        </RightContainer>
                    </Container>
            } 
        </Component>
    )
}

export default DetailView;