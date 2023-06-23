import { auth } from '@/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react'

const Login = () => {
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential: any = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        console.log(user)
      }).catch((error) => {
        console.error(error)
      });
  }
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <h1 className='mb-6 font-bold text-2xl'>ToDo App</h1>
      <button onClick={handleLogin} className='text-white bg-black rounded-md py-4 px-6'>Sign in with Google</button>
    </div>
  )
}

export default Login