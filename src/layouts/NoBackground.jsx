import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx';
import { Outlet, Link as Anchor } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { user_signout } from '../store/actions/userActions.js';

const NoBackground = () => {

    const user = useSelector(store => store.user.user)

    const dispatch = useDispatch()

    const button = [
        { title: 'Home', to: '/', id: 1 },
        { title: 'Cities', to: '/cities', id: 2 }
    ]

    const homeIcon =
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>

    const citiesIcon =
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
        </svg>

    const handleSignOutButton = () => {
        Swal.fire({
            title: 'Are you sure that you want to log out?',
            showDenyButton: true,
            confirmButtonText: 'Log out',
            denyButtonText: `Cancel`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('You have been logged out!', '', 'success')
                const token = localStorage.getItem('token').toString()
                dispatch(user_signout(token))
            } else if (result.isDenied) {
                Swal.fire('You cancelled the action.', '', 'info')
            }
        })
    }

    return (
        <>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
                <div className="drawer-side z-30 overflow-x-hidden">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full max-w-[90vw] bg-base-200 text-base-content">
                        <div className="mb-2 flex items-center justify-center gap-4 p-4">
                            <img src="/suitcase.png" alt="brand" className="h-8 w-8" />
                            <h5>
                                Menu
                            </h5>
                        </div>

                        {
                            button.map((e) => <li className='flex justify-center mb-2 p-0 rounded-sm' to={e.to} key={e.id}><Anchor className='flex flex-row gap-4 w-full' key={e.id} to={e.to}>{e.title === 'Home' ? homeIcon : citiesIcon}{e.title}</Anchor></li>)
                        }
                        <hr className="my-2 border-blue-gray-50" />
                        <li className={user ? 'p-0 rounded-sm' : 'p-0 rounded-sm'}>
                            {user ?
                                <button onClick={handleSignOutButton} className='flex justify-center w-full bg-red-500 hover:bg-red-950' to='/signout'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>Sign Out</button>
                                :
                                <Anchor className='flex justify-center w-full bg-teal-700 hover:bg-teal-900' to='/sign'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>Sign In</Anchor>}
                        </li>
                        <hr className="my-2 border-blue-gray-50" />
                        <h5 className='text-center mt-4'>MyTinerary 2024</h5>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default NoBackground;