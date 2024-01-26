import SignIn from '../components/SignIn/SignIn.jsx';
import SignUp from '../components/SignUp/SignUp.jsx';

import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GoogleAuth from '../components/GoogleAuth/GoogleAuth.jsx';

const Sign = () => {

    const signIn = useRef(null);
    const signUp = useRef(null)

    const handleChangeSignMethod = () => {
        const signInRef = signIn.current.className
        let signUpRef = signUp.current.className

        if (signInRef !== 'hidden') {
            signIn.current.className = 'hidden'
            signUp.current.className = 'flex flex-col bg-transparent text-black gap-4 md:p-4'
        } else {
            signIn.current.className = 'flex flex-col bg-transparent text-black gap-4 p-8'
            signUp.current.className = 'hidden'
        }
    }

    const store = useSelector(store => store.user.user)

    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh/1.5)] bg-center bg-fixed bg-auto" style={{ "backgroundImage": "url('/city3.jpg')" }}>
            <div className='bg-gradient-to-l from-white max-sm:from-0% min-[621px]:from-40% max-md:from-50% lg:from-35% to-slate-800 my-8 flex flex-row justify-evenly flex-wrap items-center'>
                <div ref={signIn} className='flex flex-col bg-transparent text-black gap-4 p-8'>
                    {localStorage.getItem('token') ? null : <SignIn />}
                    <h1 className='self-center text-white'>New around here?</h1>
                    <button onClick={handleChangeSignMethod} className="self-center p-2 bg-white w-[80%]">Sign Up</button>
                </div>
                <div className='hidden' ref={signUp}>
                    <SignUp />
                    <h1 className='self-center text-white'>Already have an account?</h1>
                    <button onClick={handleChangeSignMethod} className="self-center p-2 bg-white w-[80%] max-md:mb-4">Sign In</button>
                </div>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Sign;