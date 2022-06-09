import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Link as MUILink } from '@mui/material';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import palette from '../../themes/palette';
import Link from 'next/link';
import PublicIcon from '@mui/icons-material/Public';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { supabase } from '../../utils/supabaseClient';

interface DashboardPageSchema {
    name: string;
    path: string;
    icon: React.ReactElement;
}

const dashboardPages: DashboardPageSchema[] = [
    {
        name: 'Campaigns',
        path: '/home',
        icon: <PublicIcon />,
    },
    {
        name: 'My pledges',
        path: '/home/pledges',
        icon: <VolunteerActivismIcon />,
    },
    {
        name: 'Wallet',
        path: '/home/wallet',
        icon: <AccountBalanceWalletIcon />,
    }
]

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const DashboardAppBar: React.FC<{ currentPageIndex: number }> = ({ currentPageIndex }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [drawerOption, setDrawerOption] = React.useState(currentPageIndex);

  const handleMenuItemClick = (index: number) => {
      setDrawerOption(currentPageIndex);
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    supabase.auth.signOut();
  };

  const DashboardMenuItems = (style: { itemSelected: string; itemIdle: string; onHover: string; }) => {
      return dashboardPages.map((page, index) => {
        const selected = drawerOption === index;
        return (
            <Link key={index} href={page.path} passHref>
                <Button key={index} onClick={() => {handleMenuItemClick(index)}} sx={{ borderRadius: 5, textTransform: 'none', '&:hover': { backGroundColor: style.onHover } }}>
                    <Box display={'flex'} flexDirection='row' alignItems={'center'} justifyContent='center' columnGap={1.5} sx={{ color: selected ? style.itemSelected : style.itemIdle }}>
                        {page.icon}
                        <Typography variant='h4'>
                            {page.name}
                        </Typography>
                    </Box>
                </Button>
            </Link>
        )
        })
  }

  const MobileMenuItems = () => {
      const style = {
        itemSelected: '#736ced',
        itemIdle: palette.primary.dark,
        onHover: '#eee',
      }
      return (
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
            {DashboardMenuItems(style)}
        </Box>
      )
  }

  const WebMenuItems = () => {
    const style = {
        itemSelected: 'white',
        itemIdle: 'black',
        onHover: '#736ced'
      }
      return (
        <Box sx={{ flexGrow: 1, display: 'flex', columnGap: 5, justifyContent: 'center', flexDirection: 'row' }}>
            {DashboardMenuItems(style)}
        </Box>
      )
  }

  const MobileAppBarContents = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            >
            <MenuIcon />
            </IconButton>
            <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
                display: { xs: 'block', md: 'none' },
            }}
            >
                    <MobileMenuItems />

            </Menu>
        </Box>

        <Link href='/' passHref>
          <MUILink
        variant="h2"
        underline='none'
        noWrap
        component="div"
        sx={{ color: 'white', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
      >
        Spes
        </MUILink>
        </Link>
    </>
    )
  }

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#736ced', boxShadow: 1, height: '60px' }}>
                <Box sx={{ marginX: 3, paddingX: 3 }}>
      {/* <Container maxWidth="xl"> */}
        <Toolbar disableGutters>
    {MobileAppBarContents()}
        <Link href='/' passHref>
          <MUILink
              variant="h3"
              underline='none'
              noWrap
              component="div"
              sx={{ color: 'white', mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              Spes
            </MUILink>
        </Link>
         

            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, columnGap: 5, justifyContent: 'center' }}>
                <WebMenuItems />
            </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, border: '2px solid lightgray' }}>
                <Avatar alt="S" src="/joe.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
        </Toolbar>
      {/* </Container> */}
      </Box>
    </AppBar>
  );
};
export default DashboardAppBar;
