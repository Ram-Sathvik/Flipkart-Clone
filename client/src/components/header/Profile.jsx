import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Profile = ({ account, setAccount }) => {

    const [ open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const logoutUser = () => {
        setAccount('');
    }

    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{ marginTop: 2, cursor: 'pointer'}} >{account}</Typography>
            </Box>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {handleClose(); logoutUser(); }}>
                    <PowerSettingsNewIcon fontSize="small" />
                    <Typography>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Profile;