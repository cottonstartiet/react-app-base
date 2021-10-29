import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
    Avatar,
    Box,
    Button,
    Divider,
    Drawer,
    Hidden,
    List,
    Typography
} from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleIcon from '@mui/icons-material/People';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import NavItem from './NavItem';

const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith'
};

const items = [
    {
        href: '/app/dashboard',
        icon: DashboardOutlinedIcon,
        title: 'Dashboard'
    },
    {
        href: '/app/customers',
        icon: PeopleIcon,
        title: 'Customers'
    },
    {
        href: '/app/products',
        icon: ShoppingBagIcon,
        title: 'Products'
    },
    {
        href: '/app/account',
        icon: ManageAccountsOutlinedIcon,
        title: 'Account'
    },
    {
        href: '/app/settings',
        icon: SettingsOutlinedIcon,
        title: 'Settings'
    },
    {
        href: '/login',
        icon: LockOutlinedIcon,
        title: 'Login'
    },
    {
        href: '/register',
        icon: PersonAddOutlinedIcon,
        title: 'Register'
    },
    {
        href: '/404',
        icon: ErrorOutlineOutlinedIcon,
        title: 'Error'
    }
];

interface Props {
    onMobileClose: any;
    openMobile: boolean;
}

const DashboardSidebar = ({ onMobileClose, openMobile }: Props) => {
    const location = useLocation();

    useEffect(() => {
        if (openMobile && onMobileClose) {
            onMobileClose();
        }
    }, [location.pathname]);

    const content = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2
                }}
            >
                <Avatar
                    component={RouterLink}
                    src={user.avatar}
                    sx={{
                        cursor: 'pointer',
                        width: 64,
                        height: 64
                    }}
                    to="/app/account"
                />
                <Typography
                    color="textPrimary"
                    variant="h5"
                >
                    {user.name}
                </Typography>
                <Typography
                    color="textSecondary"
                    variant="body2"
                >
                    {user.jobTitle}
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
                <List>
                    {items.map((item) => (
                        <NavItem
                            href={item.href}
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                        />
                    ))}
                </List>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    m: 2,
                    p: 2
                }}
            >
                <Typography
                    align="center"
                    gutterBottom
                    variant="h4"
                >
                    Need more?
                </Typography>
                <Typography
                    align="center"
                    variant="body2"
                >
                    Upgrade to PRO version and access 20 more screens
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        pt: 2
                    }}
                >
                    <Button
                        color="primary"
                        component="a"
                        href="https://react-material-kit.devias.io"
                        variant="contained"
                    >
                        See PRO version
                    </Button>
                </Box>
            </Box>
        </Box>
    );

    return (
        <>
            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                    PaperProps={{
                        sx: {
                            width: 256
                        }
                    }}
                >
                    {content}
                </Drawer>
            </Hidden>
            <Hidden xlDown>
                <Drawer
                    anchor="left"
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: 256,
                            top: 64,
                            height: 'calc(100% - 64px)'
                        }
                    }}
                >
                    {content}
                </Drawer>
            </Hidden>
        </>
    );
};

export default DashboardSidebar;
