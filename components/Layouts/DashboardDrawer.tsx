import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Link from 'next/link';
import palette from '../../themes/palette';
import { Button } from '@mui/material';

interface DrawerItemType {
    name: string;
    icon: React.ReactElement;
    path: string;
}

const drawerList: DrawerItemType[] = [
    {
        name: 'Campaigns',
        icon: <TrendingUpIcon />,
        path: '/dashboard',
    },
    {
        name: 'My donations',
        icon: <PersonIcon />,
        path: '/dashboard/donations',
    },
    {
        name: 'Wallet',
        icon: <AccountBalanceWalletIcon />,
        path: '/dashboard/wallet',
    },
]


const DashboardDrawer: React.FC<{ currentPageIndex: number }> = ({ currentPageIndex }) => {
    const [drawerOption, setDrawerOption] = React.useState(currentPageIndex);
   
    const handleDrawerClick = (index: number) => {
        setDrawerOption(index);
    }

    return (
        <div>
            <Box 
            display='flex' 
            justifyContent={'center'}
            marginTop={1}
            marginBottom={4}>
                <Link href="/">
                    <Button sx={{ 
                        textTransform: 'none', 
                    }}>
                        <Typography variant="h3" sx={{ fontWeight: 900, color: palette.secondary.dark }}>
                        Spes
                        </Typography>
                    </Button>
                </Link>
            </Box>
        <List>
          {drawerList.map((drawerItem, index) => {
              const selected = drawerOption === index;
              return (
                <Link key={index} href={drawerItem.path} passHref>
                    <ListItem button key={index} onClick={() => {handleDrawerClick(index)}}>
                        <Box display={'flex'} flexDirection='row' alignItems={'center'} justifyContent='center' marginY={1.5} marginLeft={3}>
                            <ListItemIcon sx={{ color: selected ? palette.primary.main : '#000' }}>
                                {drawerItem.icon}
                            </ListItemIcon>
                            <Typography variant='h6' sx={{ color: selected ? palette.primary.main : '#000' }}>
                                {drawerItem.name}
                            </Typography>
                        </Box>
                    </ListItem>
                </Link>
              )
            })}
        </List>
      </div>
    )
};

export default DashboardDrawer