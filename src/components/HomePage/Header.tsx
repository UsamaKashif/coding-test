import { auth } from '@/firebaseConfig'
import React from 'react'

const Header = ({user}: {user:any}) => {
  return (
    <header className='flex flex-col sm:flex-row gap-3 flex-wrap items-center justify-between py-12'>
        <h1>{user.email}</h1>
        <button onClick={() => auth.signOut()} className='px-5 py-1 border border-black rounded-md'>SignOut</button>
    </header>
  )
}

export default Header