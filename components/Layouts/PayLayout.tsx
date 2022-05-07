import React from 'react';
import * as _ from 'lodash';
import { Box, Button, ListItem, ListItemIcon, Typography } from "@mui/material";
import { DrawerItemType } from "../../interfaces";
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddchartIcon from '@mui/icons-material/Addchart';
import palette from '../../themes/palette';
import Link from 'next/link';
import PaidIcon from '@mui/icons-material/Paid';

const payMenuList: DrawerItemType[] = [
    {
        name: 'Current policy',
        icon: <PaidIcon />,
        path: '/dashboard/pay',
    },
    {
        name: 'Create policy',
        icon: <AddchartIcon />,
        path: '/dashboard/pay/create',
    },
    {
        name: 'Favorites',
        icon: <FavoriteBorderIcon />,
        path: '/dashboard/pay/fav',
    },
    {
        name: 'Past policies',
        icon: <EventRepeatIcon />,
        path: '/dashboard/pay/past',
    },
]

const Menu: React.FC<{ currentPayPageIndex: number }> = ({ currentPayPageIndex }) => {
    const [menuOption, setMenuOption] = React.useState(currentPayPageIndex);

    const handleMenuClick = (index: number) => {
        setMenuOption(index);
    }

    return (
        <Box
            display='flex'
            justifyContent={'center'}
            flexDirection={'row'}
            columnGap={5}
        >
            {_.map(payMenuList, (menuItem, index) => {
                const selected = menuOption === index;
                return (
                    <Link key={index} href={menuItem.path} passHref>
                        <Button text-transform='none' onClick={() => {handleMenuClick(index)}} sx={{borderRadius: 10, backgroundColor: selected ? palette.primary.lighter : 'transparent' }}>
                            <Box display={'flex'} flexDirection='row' columnGap={2} alignItems='center' paddingX={1} paddingY={1} sx={{ textTransform: 'none' }}>
                                <ListItemIcon sx={{ mr: -4, color: selected ? palette.primary.main : '#000' }}>
                                    {menuItem.icon}
                                </ListItemIcon>
                                <Typography variant='body1' sx={{ color: selected ? palette.primary.main : '#000' }}>
                                    {menuItem.name}
                                </Typography>
                            </Box>
                        </Button>
                    </Link>
                )
            })}
        </Box>
    )
}

const PayLayout: React.FC<{ currentPayPageIndex: number }> = ({ children, currentPayPageIndex }) => {
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Menu currentPayPageIndex={currentPayPageIndex} />
            <Box maxWidth="1000px" mx="auto" width="100%" marginTop={8} paddingX={4}>
                <Box display='flex' flexDirection='column' rowGap={1}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
};

export default PayLayout;