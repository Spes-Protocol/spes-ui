import React, { ReactNode } from 'react'
import Head from 'next/head'
import ThemeConfig from '../../themes'
import ScrollToTop from '../ScrollToTop'
import GlobalStyles from '../../themes/globalStyles'
import { Box } from '@mui/material'
// import Navbar from '../Navbar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  return (
    <ThemeConfig>
    <ScrollToTop />
    <GlobalStyles />
    <Box maxWidth="1000px" mx="auto" width="100%" marginTop={8}>
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
        {/* <Navbar /> */}
        </header>
        {children}
      </div>
    </Box>
  </ThemeConfig>  
  )
}

export default Layout;
