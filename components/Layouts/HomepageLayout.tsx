import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { drawerWidth } from '../../utils/constants';
import HomepageAppBar from './HomepageAppBar';
import Head from 'next/head';
import ThemeConfig from '../../themes';
import ScrollToTop from '../ScrollToTop';
import GlobalStyles from '../../themes/globalStyles';

const HomepageLayout: React.FC<{ children?: React.ReactNode; currentPageIndex: number }> = ({ children, currentPageIndex }) => {
    // const [mobileOpen, setMobileOpen] = React.useState(false);
 
    // const handleDrawerToggle = () => {
    //   setMobileOpen(!mobileOpen);
    // };
    
    return (
      <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
          {/* <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link> */}
        </Head>
        <CssBaseline />
        <HomepageAppBar currentPageIndex={currentPageIndex} />
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
              <Box maxWidth="1200px" mx="auto" width="100%" marginTop={4}>
              {children}
              </Box>
        </Box>
      </Box>
      </ThemeConfig>
    );
  }
  
export default HomepageLayout;