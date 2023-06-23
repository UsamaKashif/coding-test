import { auth } from '@/firebaseConfig';
import '@/styles/globals.css'
import { User } from 'firebase/auth';
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>();
  const [authChecking, setAuthChecking] = useState<boolean>(true);
  useEffect(() => {
    setAuthChecking(true);
    auth.onAuthStateChanged(async (user) => {
      setUser(user);
      setAuthChecking(false);
    });
  }, []);
  return <Component {...pageProps} user={user} authChecking={authChecking} />
}
