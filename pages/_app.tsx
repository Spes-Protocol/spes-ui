import NextNProgress from 'nextjs-progressbar';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  // const [authenticatedState, setAuthenticatedState ] = useState('not-authenticated');
  // const router = useRouter();

  // async function checkUser() {
  //   const user = await supabase.auth.user()
  //   if (user) {
  //     setAuthenticatedState('authenticated')
  //   }
  // }
  // async function handleAuthChange(event, session) {
  //   await fetch('/api/auth', {
  //     method: 'POST',
  //     headers: new Headers({ 'Content-Type': 'application/json' }),
  //     credentials: 'same-origin',
  //     body: JSON.stringify({ event, session }),
  //   })
  // }

  // useEffect(() => {
  //   const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
  //     handleAuthChange(event, session)
  //     if (event === 'SIGNED_IN') {
  //       setAuthenticatedState('authenticated')
  //       router.push('/profile')
  //     }
  //     if (event === 'SIGNED_OUT') {
  //       setAuthenticatedState('not-authenticated')
  //     }
  //   })
  //   checkUser()
  //   return () => {
  //     authListener.unsubscribe()
  //   }
  // }, [])

  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />;
    </>
  );
}