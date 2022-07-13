import NextNProgress from 'nextjs-progressbar';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';
import { AuthProvider } from '../lib/auth';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider supabase={supabase}>
       <NextNProgress />
      <Component {...pageProps} />;
    </AuthProvider>
  );
}