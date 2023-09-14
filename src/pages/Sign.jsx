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
            signUp.current.className = 'flex flex-col items-center bg-white text-black rounded-xl p-4 gap-4 mt-8 mb-2'
        } else {
            signIn.current.className = 'flex flex-col items-center bg-white text-black rounded-xl p-4 gap-4 mt-8 mb-2'
            signUp.current.className = 'hidden'
        }
    }

    const store = useSelector(store => store.user.user)

    return (
        <div className="flex flex-col items-center min-h-[calc(100vh/1.5)] bg-center bg-fixed bg-auto" style={{ "backgroundImage": "url('/city3.jpg')" }}>
            <div ref={signIn} className='flex flex-col items-center bg-white text-black rounded-xl p-4 gap-4 mt-8 mb-2'>
                {localStorage.getItem('token') ? null : <SignIn />}
                <h1>New around here?</h1>
                <button onClick={handleChangeSignMethod} className="p-4 rounded-xl bg-slate-700 text-white">Sign Up</button>
            </div>
            <div className='hidden' ref={signUp}>
                <SignUp />
                <h1>Already have an account?</h1>
                <button onClick={handleChangeSignMethod} className="p-4 rounded-xl bg-slate-700 text-white">Sign In</button>
            </div>
            <GoogleAuth />
        </div>
    )
}

export default Sign;