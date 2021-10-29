import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Badge,
    Box,
    Hidden,
    IconButton,
    Toolbar
} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import Logo from '../Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }: any) => {
    const [notifications] = useState([]);

    return (
        <AppBar
            elevation={0}
            {...rest}
        >
            <Toolbar>
                <RouterLink to="/">
                    <Logo />
                </RouterLink>
                <Box sx={{ flexGrow: 1 }} />
                <Hidden xlDown>
                    <IconButton color="inherit" size="large">
                        <Badge
                            badgeContent={notifications.length}
                            color="primary"
                            variant="dot"
                        >
                            <NotificationsNoneOutlinedIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" size="large">
                        <ExitToAppOutlinedIcon />
                    </IconButton>
                </Hidden>
                <Hidden lgUp>
                    <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
                        <MenuOutlinedIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default DashboardNavbar;
