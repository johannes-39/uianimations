import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ohmLogoWhite from '../../../public/Logo_Th_Nurnberg2.png'
import {Avatar} from "@mui/material";
import obama from '../../../public/test.webp'

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{flexGrow: 1, bgcolor: '#000000'}}>
            <AppBar position="static">
                <Toolbar>

                    <Box
                        component="img"
                        src={ohmLogoWhite.src}
                        alt="Logo"
                        sx={{width: 100, height: 'auto'}}
                    />
                    <Typography variant="h6" component="div" sx={{marginLeft: '10%', flexGrow: 1}}>

                    </Typography>
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            edge={"end"}
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <Avatar>
                                <Box
                                    component="img"
                                    src={obama.src}
                                    alt="Logo"
                                    sx={{width: 45, paddingTop: 1, height: 'auto'}}
                                />
                            </Avatar>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Header
