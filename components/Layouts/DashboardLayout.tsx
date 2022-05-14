import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { drawerWidth } from '../../utils/constants';
import DashboardAppBar from './DashboardAppBar';

const DashboardLayout: React.FC<{ children?: React.ReactNode; currentPageIndex: number }> = ({ children, currentPageIndex }) => {
    // const [mobileOpen, setMobileOpen] = React.useState(false);
 
    // const handleDrawerToggle = () => {
    //   setMobileOpen(!mobileOpen);
    // };
    
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', background: 'linear-gradient(#cbf3f0, #fff6cc, #cbf3f0)' }}>
        <CssBaseline />
        <DashboardAppBar currentPageIndex={currentPageIndex} />
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            {/* {children} */}
            <Box maxWidth="1000px" mx="auto" width="100%" marginTop={8}>
            {children}
            </Box>
        </Box>
      </Box>
    );
  }
  
export default DashboardLayout;