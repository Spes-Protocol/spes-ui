import React from 'react';
import * as _ from 'lodash';
import { Box, Button, Divider, ListItem, ListItemIcon, Typography } from "@mui/material";
// import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import AddIcon from '@mui/icons-material/Add';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import FestivalOutlinedIcon from '@mui/icons-material/FestivalOutlined';
import palette from '../../themes/palette';
import Link from 'next/link';
import { Link as MuiLink } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
// import { DashboardPageSchema } from '../../types';

const dashboardMenuList: DashboardPageSchema[] = [
    {
        name: 'Your Profile',
        icon: <PermIdentityOutlinedIcon />,
        path: '/home/dashboard',
    },
    {
        name: 'Spes Portfolio',
        icon: <AutoGraphOutlinedIcon />,
        path: '/home/dashboard/portfolio',
    },
    {
        name: 'Your Pledges',
        icon: <VolunteerActivismOutlinedIcon />,
        path: '/home/dashboard/pledges',
    },
    {
        name: 'Manage Campaigns',
        icon: <FestivalOutlinedIcon />,
        path: '/home/dashboard/manage',
    },
]

/**
 * 
 * @param param0             
 * <Box display='flex' flexDirection='row' justifyContent={'flex-start'} columnGap={4} alignItems='center' sx={{ my: 2 }}>
                    <Link component="button" variant='h4' underline='none' sx={{ color: toggleActive ? 'black' : '#aaa', borderBottom: toggleActive ? 3 : 0 }} onClick={handleActiveClick}>
                        Active
                    </Link>
                    <Link component="button" variant='h4' underline='none'  sx={{ color: toggleActive ? '#aaa' : 'black', borderBottom: toggleActive ? 0 : 3 }} onClick={handlePendingClick}>
                        Pending
                    </Link>
            </Box>
 * @returns 
 */

const Menu: React.FC<{ currentDashboardPageIndex: number }> = ({ currentDashboardPageIndex }) => {
    const [menuOption, setMenuOption] = React.useState(currentDashboardPageIndex);

    const handleMenuClick = (index: number) => {
        setMenuOption(index);
    }

    return (
        <>
            <Box
                display='flex'
                justifyContent={'space-between'}
                flexDirection={'row'}
                columnGap={4}
            >
                {_.map(dashboardMenuList, (menuItem, index) => {
                    const selected = menuOption === index;
                    return (
                        <Link key={index} href={menuItem.path} passHref>
                            <MuiLink display='flex' flexDirection={'row'} alignItems='center' columnGap={1} onClick={() => {handleMenuClick(index)}} component="button" variant='h4' underline='none' sx={{ py: 0.5, borderRadius: 0, color: selected ? 'black' : '#aaa', borderBottom: 3, borderColor: selected ? 'black' : 'transparent' }}>
                                {menuItem.icon} {menuItem.name}
                            </MuiLink>
                            {/* <Button size='large' startIcon={menuItem.icon} onClick={() => {handleMenuClick(index)}} variant='text' sx={{ borderRadius: 0, color: selected ? 'black' : '#aaa', borderBottom: selected ? 3 : 0 }}>
                                {menuItem.name}
                            </Button> */}
                        </Link>
                    )
                })}
            </Box>
            <Divider sx={{ borderBottomWidth: 2 }} />
        </>
        
    )
}

const MyDashboardLayout: React.FC<{ children: React.ReactNode; currentDashboardPageIndex: number }> = ({ children, currentDashboardPageIndex }) => {
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Menu currentDashboardPageIndex={currentDashboardPageIndex} />
            
            {/* <Box maxWidth="1000px" mx="auto" width="100%" marginTop={8} paddingX={4}> */}
                {/* <Box display='flex' flexDirection='column' rowGap={1}> */}
                    {children}
                {/* </Box>
            </Box> */}
        </Box>
    )
};

export default MyDashboardLayout;