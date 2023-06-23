import { auth } from '@/firebaseConfig';
import '@/styles/globals.css'
import { User } from 'firebase/auth';
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setUser(user);
    });
  }, []);
  return <Component {...pageProps} user={user} />
}
