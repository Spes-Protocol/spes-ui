import React from 'react';
import * as _ from 'lodash';
import { Box, Button, Divider, ListItem, ListItemIcon, Typography } from "@mui/material";
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
// import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import AddIcon from '@mui/icons-material/Add';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import palette from '../../themes/palette';
import Link from 'next/link';
import { Link as MuiLink } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import { DashboardPageSchema } from '../../types';

const campaignMenuList: DashboardPageSchema[] = [
    {
        name: 'Explore',
        icon: <ExploreOutlinedIcon />,
        path: '/home/campaigns',
    },
    {
        name: 'Create Campaign',
        icon: <AddIcon />,
        path: '/home/campaigns/create',
    },
    // {
    //     name: 'Manage Campaigns',
    //     icon: <AutoGraphOutlinedIcon />,
    //     path: '/home/campaigns/manage',
    // },
]

const Menu: React.FC<{ currentCampaignPageIndex: number }> = ({ currentCampaignPageIndex }) => {
    const [menuOption, setMenuOption] = React.useState(currentCampaignPageIndex);

    const handleMenuClick = (index: number) => {
        setMenuOption(index);
    }

    return (
        <Box display='flex'
        // justifyContent={'center'}
        flexDirection={'column'} marginBottom={4}>
            <Box
            display='flex'
            // justifyContent={'center'}
            flexDirection={'row'}
            columnGap={4}
            >
                {_.map(campaignMenuList, (menuItem, index) => {
                    const selected = menuOption === index;
                    return (
                        <Link key={index} href={menuItem.path} passHref>
                        <MuiLink display='flex' flexDirection={'row'} alignItems='center' columnGap={1} onClick={() => {handleMenuClick(index)}} component="button" variant='h4' underline='none' sx={{ py: 0.5, borderRadius: 0, color: selected ? 'black' : '#aaa', borderBottom: selected ? 3 : 0 }}>
                            {menuItem.icon} {menuItem.name}
                        </MuiLink>
                    </Link>
                    )
                })}
            </Box>
            <Divider sx={{ borderBottomWidth: 2 }} />
        </Box>
    )
}

const CampaignLayout: React.FC<{ children: React.ReactNode; currentCampaignPageIndex: number }> = ({ children, currentCampaignPageIndex }) => {
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Menu currentCampaignPageIndex={currentCampaignPageIndex} />
            
            {/* <Box maxWidth="1000px" mx="auto" width="100%" marginTop={8} paddingX={4}> */}
                {/* <Box display='flex' flexDirection='column' rowGap={1}> */}
                    {children}
                {/* </Box>
            </Box> */}
        </Box>
    )
};

export default CampaignLayout;