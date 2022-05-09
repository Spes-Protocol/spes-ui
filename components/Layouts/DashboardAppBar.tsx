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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import palette from '../../themes/palette';
import Link from 'next/link';
import { List, ListItem, ListItemIcon } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const pages = ['Products', 'Pricing', 'Blog'];

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
  };

  const mobileMenu = () => {
      return (
          <Box display='flex' flexDirection='column'>
            {dashboardPages.map((page, index) => {
                const selected = drawerOption === index;
                return (
                    <Link key={index} href={page.path} passHref>
                        <Button key={index} onClick={() => {handleMenuItemClick(index)}}>
                            <Box display={'flex'} flexDirection='row' alignItems={'center'} justifyContent='center' marginY={1.5} marginLeft={3}>
                                <Box sx={{ color: selected ? palette.primary.main : '#000' }}>
                                    {page.icon}
                                </Box>
                                <Typography variant='h6' sx={{ color: selected ? palette.primary.main : '#000' }}>
                                    {page.name}
                                </Typography>
                            </Box>
                        </Button>
                    </Link>
                )
                })}
          </Box>
      )
  }

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Spes
          </Typography>

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
                {mobileMenu()}
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Spes
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            {dashboardPages.map((page, index) => {
                const selected = drawerOption === index;
                return (
                    <Link key={index} href={page.path} passHref>
                        <Button key={index} onClick={() => {handleMenuItemClick(index)}}>
                            <Box display={'flex'} flexDirection='row' alignItems={'center'} justifyContent='center' marginY={1.5} marginLeft={3}>
                                <Box sx={{ color: selected ? palette.primary.main : '#000' }}>
                                    {page.icon}
                                </Box>
                                <Typography variant='h6' sx={{ color: selected ? palette.primary.main : '#000' }}>
                                    {page.name}
                                </Typography>
                            </Box>
                        </Button>
                    </Link>
                )
                })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
      </Container>
    </AppBar>
  );
};
export default DashboardAppBar;
