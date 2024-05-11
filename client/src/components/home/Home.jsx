import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";

import { useEffect } from "react";

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Box, styled } from "@mui/material";

const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`

const Home = () => {

    const { products } = useSelector(state => state.getProducts)
    console.log(products);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <Slide products={products} title="Top Offers" />
                {/* <Slide products={products} title="Grocery" />
                <Slide products={products} title="Mobile" />
                <Slide products={products} title="Fashion" />
                <Slide products={products} title="Electronics" />
                <Slide products={products} title="Home" />
                <Slide products={products} title="Appliances" />
                <Slide products={products} title="Beauty, Toys and Products" /> */}
            </Component>
        </>
    )
}

export default Home;