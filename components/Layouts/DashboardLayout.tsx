import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { drawerWidth } from '../../utils/constants';
import DashboardAppBar from './DashboardAppBar';
import DashboardDrawer from './DashboardDrawer';

const DashboardLayout: React.FC<{ children?: React.ReactNode; currentPageIndex: number }> = ({ children, currentPageIndex }) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
 
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = <DashboardDrawer currentPageIndex={currentPageIndex} />;
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <DashboardAppBar handleDrawerToggle={handleDrawerToggle} />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            {children}
            {/* <Box maxWidth="1000px" mx="auto" width="100%" marginTop={8}>
            {children}
            </Box> */}
        </Box>
      </Box>
    );
  }
  
export default DashboardLayout;