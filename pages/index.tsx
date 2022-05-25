import * as _ from 'lodash';
import { Box, Divider, Typography } from '@mui/material';
import LandingPageCard, { LandingPageCardProps } from '../components/LandingPageCard';
import Layout from '../components/Layouts/Layout'
import LoginCard from '../components/LoginCard';

const langingPageCardsCopy: LandingPageCardProps[] = [
  {
    heading: 'Support international campaigns with full transparency',
    description: 'We are on a mission to help patrons support their best-loved campaigns and watch their impact. Choose among any cStables (cUSD/cREAL/cEURO) on the Celo blockchain.',
    image: '/secure.png',
  },
  {
    heading: 'Host campaigns and engage with patrons',
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
    <Box display='flex' flexDirection='column' rowGap={1}>
    <Typography variant='h1'>Spes</Typography>
    <Typography variant='h2' sx={{ color: 'rgb(105, 77, 255)'}}>Making it easier than ever to give to your favorite organizations.</Typography>
    {_.map(langingPageCardsCopy, (card: LandingPageCardProps, index: number) => {
      return <LandingPageCard key={index} heading={card.heading} description={card.description} image={card.image} reverse={card.reverse} />
    })}
  </Box>
  )
}

const App = () => {
  return (
      <Layout title="Caper - crypto payroll in seconds">
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' columnGap={4}>
          <LoginCopy />
          <Divider sx={{ borderRightWidth: 5 }} orientation="vertical" variant="middle" flexItem />
          <LoginCard />
        </Box>
      </Layout>
  );
}

export default App;

// import { useState, useEffect } from 'react'
// import { supabase } from '../utils/supabaseClient'
// import Auth from '../components/Auth'
// import Account from '../components/Account'
// import { AuthSession } from '@supabase/supabase-js'

// export default function Home() {
//   const [session, setSession] = useState<AuthSession | null>(null)

//   useEffect(() => {
//     setSession(supabase.auth.session())

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session)
//     })
//   }, [])

//   return (
//     <div className="container" style={{ padding: '50px 0 100px 0' }}>
//       {!session ? <Auth /> : <Account key={session.user?.id} session={session} />}
//     </div>
//   )
// }