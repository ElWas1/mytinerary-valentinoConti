import SignIn from '../components/Sign/SignIn/SignIn.jsx';
import SignUp from '../components/Sign/SignUp/SignUp.jsx';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleAuth from '../components/Sign/GoogleAuth.jsx';
import { change_bg } from '../store/actions/pageActions.js';

const Sign = () => {

    const dispatch = useDispatch()

    const dbLoading = useSelector(store => store.user.loading)
    const dbRejected = useSelector(store => store.user.rejected)

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

    useEffect(() => {
        dispatch(change_bg("/city3.webp"))
    }, [])

    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh/1.5)] bg-center bg-fixed bg-auto">
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
            <div className={dbLoading === true || dbRejected === true ? 'flex flex-col justify-center items-center mb-8 gap-4 rounded-xl' : 'hidden'}>
                <div className={dbLoading === true ? 'loading' : 'hidden'} />
                <p className={dbLoading === true ? 'text-white text-lg' : 'hidden'}>Loading, please wait...</p>
                <p className={dbLoading === false && dbRejected === true ? 'text-red-500 text-lg bg-black p-4 rounded-xl' : 'hidden'}>The connection to the database has been refused. Check your internet connection or try again later.</p>
            </div>
        </div>
    )
}

export default Sign;