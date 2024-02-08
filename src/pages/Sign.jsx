import SignIn from '../components/Sign/SignIn/SignIn.jsx';
import SignUp from '../components/Sign/SignUp/SignUp.jsx';

import { useRef } from 'react';
import GoogleAuth from '../components/Sign/GoogleAuth.jsx';

const Sign = () => {

    const signIn = useRef(null);
    const signUp = useRef(null)

    const handleChangeSignMethod = () => {
        const signInRef = signIn.current.className

        if (signInRef !== 'hidden') {
            signIn.current.className = 'hidden'
            signUp.current.className = 'flex flex-col bg-slate-700 text-black gap-4 lg:p-4'
        } else {
            signIn.current.className = 'flex flex-col bg-slate-700 text-black gap-4 p-8'
            signUp.current.className = 'hidden'
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh/1.5)] bg-center bg-fixed bg-auto" style={{ "backgroundImage": `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/city3.jpg')` }}>
            <div className='max-[580px]:bg-slate-700 -[500px] bg-white my-8 flex flex-row justify-evenly flex-wrap items-center max-[580px]:py-4'>
                <div ref={signIn} className='flex flex-col bg-slate-700 text-black gap-4 p-8'>
                    {localStorage.getItem('token') ? null : <SignIn />}
                    <h1 className='self-center text-white'>New around here?</h1>
                    <button onClick={handleChangeSignMethod} className="self-center p-2 bg-white w-[80%]">Sign Up</button>
                </div>
                <div className='hidden' ref={signUp}>
                {localStorage.getItem('token') ? null : <SignUp />}
                    <h1 className='self-center text-white'>Already have an account?</h1>
                    <button onClick={handleChangeSignMethod} className="self-center p-2 bg-white w-[80%] max-md:mb-8">Sign In</button>
                </div>
                {localStorage.getItem('token') ? null : <GoogleAuth />}
            </div>
        </div>
    )
}

export default Sign;