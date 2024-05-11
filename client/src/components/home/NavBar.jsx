import { Box, Typography, styled } from "@mui/material"

import { navData } from "../../constants/data";
import { Link } from "react-router-dom";

const Component = styled(Box)`
    display: flex;
    margin: 55px 130px 0 130px;
    justify-content: space-between;
    text-align: center;
`

const Container = styled(Link)`
    padding: 12px 8px;
    text-decoration: none;
    color: inherit;
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`

const NavBar = () => {
    return (
        <Component>
            {
                navData.map(data => (
                    <Container>
                        <img src={data.url} alt="nav" style={{ width: 64 }} />
                        <Text>{data.text}</Text>
                    </Container>
                ))
            }
        </Component>
    )
}

export default NavBar;