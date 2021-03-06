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
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import { supabase } from '../../utils/supabaseClient';
import HomeWalletConnect from '../HomeWalletConnect';

const dashboardPages: DashboardPageSchema[] = [
    {
        name: ' Campaigns',
        path: '/home/campaigns/',
        icon: <PublicRoundedIcon />,
    },
    {
        name: 'Dashboard',
        path: '/home/dashboard',
        icon: <DashboardRoundedIcon />,
    },
]

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const HomepageAppBar: React.FC<{ currentPageIndex: number }> = ({ currentPageIndex }) => {
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
                <Button key={index} onClick={() => {handleMenuItemClick(index)}} sx={{ textTransform: 'none', '&:hover': { backGroundColor: style.onHover } }}>
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

          <Box sx={{ flexGrow: 0, display:'flex', flexDirection: 'row', columnGap: 2 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <HomeWalletConnect isMobile={false}/>
            </Box>
            <Box  sx={{ display: { xs: 'flex', md: 'none' } }}>
            <HomeWalletConnect isMobile={true}/>
            </Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, border: '2px solid lightgray' }}>
                <Avatar alt="SA" src="/altman.jpg" />
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
export default HomepageAppBar;
