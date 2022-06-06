import * as _ from 'lodash';
import { Box, Divider, Typography } from '@mui/material';
import LandingPageCard, { LandingPageCardProps } from '../components/LandingPageCard';
import Layout from '../components/Layouts/Layout'
import LoginCard from '../components/LoginCard';
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Account from '../components/Account'
import { AuthSession } from '@supabase/supabase-js'
import { useRouter } from 'next/router';
import Campaigns from './home';

const langingPageCardsCopy: LandingPageCardProps[] = [
  {
    heading: 'Support international campaigns with full transparency',
    description: 'We are on a mission to help patrons support their best-loved campaigns and watch their impact. Choose among any cStables (cUSD/cREAL/cEURO) on the Celo blockchain.',
    image: '/secure.png',
  },
  {
    heading: 'Host campaigns and engage with supporters',
    description: 'Engage with your supporters and share your results from campaigns by sharing updates and progress with your community and maximize your impact.',
    image: '/engage.png',
    reverse: true,
  },
  {
    heading: 'Set your own giving options',
    description: 'You have the freedom to choose any giving schedule by connecting your Celo wallet to Spes. Your wallets and transactions are end-to-end encrypted and stored securely.',
    image: '/recur.png',
  }
]

const LoginCopy = () => {
  return (
    <Box display='flex' flexDirection='column' rowGap={3}>
      <Box>
        <Typography variant='h1'>Spes</Typography>
        <Typography variant='h2' sx={{ color: '#f25c54' }}>Making it easier than ever to give to your favorite organizations.</Typography>
      </Box>
      <Typography variant='h5'>
        Spes is an open-source platform hosted on the Celo blockchain that helps you donate to your favorite campaigns and organizations.
      </Typography>
      <Box>
        {_.map(langingPageCardsCopy, (card: LandingPageCardProps, index: number) => {
          return <LandingPageCard key={index} heading={card.heading} description={card.description} image={card.image} reverse={card.reverse} />
        })}
      </Box>
  </Box>
  )
}

const App = () => {
  const [session, setSession] = useState<AuthSession | null>(null)
  const router = useRouter();

  useEffect(() => {

    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    // if (session) {
    //   router.push('/home')
    // }
  }, [])

  return (
    <>
    {!session ?
    <Layout title="Spes - A decentralized protocol to power initiatives that matter">
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' columnGap={8}>
          <LoginCopy />
          <Divider sx={{ borderRightWidth: 5 }} orientation="vertical" variant="middle" flexItem />
          <LoginCard />
        </Box>
      </Layout> : 
      <Campaigns />
  }
    </>
  );
}

export default App;