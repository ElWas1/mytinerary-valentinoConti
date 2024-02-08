import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx';
import { Outlet, Link as Anchor } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { user_signout } from '../store/actions/userActions.js';

const Main = () => {

    const imageClass = 'bg-cover w-screen h-screen brightness-50'

    const dispatch = useDispatch()

    const user = useSelector(store => store.user.user)

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

    useEffect(
        () => {
            //get all the imgs in the "slide" div and change to an array of img objects
            let slide = document.getElementById("slide");
            let arr = Array.prototype.slice.call(slide.children);

            //initialize css
            arr.map(function (imgObj) {
                imgObj.classList.add("slide-img");
            });

            //showing the first slide
            arr[0].classList.add("show");

            //initializing values
            let currentSlide = 1;
            let slideLength = slide.children.length;
            let prevSlide = 0;

            //interval function
            setInterval(function () {
                if (currentSlide >= slideLength)
                    currentSlide = 0;

                arr[prevSlide].classList.remove("show");
                arr[currentSlide].classList.add("show");

                prevSlide = currentSlide;
                currentSlide++;

            }, 5000)
        }),
        []

    const button = [
        { title: 'Home', to: '/', id: 'home' },
        { title: 'Cities', to: '/cities', id: 'cities' }
    ]

    const userButtons = [
        { title: 'User Settings', to: `/user/${user?.username}`, id: 'user_settings' },
        { title: 'Saved Itineraries', to: '/', id: 'saved_itineraries' },
        { title: 'Liked Itineraries', to: '/', id: 'liked_itineraries' },
        { title: 'My Itineraries', to: '/', id: 'my_itineraries' }
    ]

    const buttonIcons = {
        home: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>,

        cities: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
        </svg>,

        user_settings: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>,

        saved_itineraries: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>,

        liked_itineraries: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>,
        my_itineraries: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
    }

    return (
        <>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div id='slide'>
                        <img className={imageClass} src="/boat.jpg" alt="Boat" />
                        <img className={imageClass} src="/city.jpg" alt="City" />
                        <img className={imageClass} src="/lake1.jpg" alt="Lake" />
                        <img className={imageClass} src="/mountains.jpg" alt="Mountains" />
                        <img className={imageClass} src="/road.jpg" alt="Road" />
                        <img className={imageClass} src="/beach.jpg" alt="Beach" />
                        <img className={imageClass} src="/city2.jpg" alt="City 2" />
                        <img className={imageClass} src="/boat2.jpg" alt="Boat 2" />
                        <img className={imageClass} src="/bridge.jpg" alt="Bridge" />
                        <img className={imageClass} src="/river2.jpg" alt="River 2" />
                        <img className={imageClass} src="/castle.jpg" alt="Castle" />
                        <img className={imageClass} src="/lake2.jpg" alt="Lake 2" />
                        <img className={imageClass} src="/city3.jpg" alt="City 3" />
                        <img className={imageClass} src="/lake3.jpg" alt="Lake 3" />
                        <img className={imageClass} src="/mountains2.jpg" alt="Mountains 2" />
                        <img className={imageClass} src="/river.jpg" alt="River" />
                        <img className={imageClass} src="/snow.jpg" alt="Snow" />
                    </div>
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
                            button.map((e) => <li className='mb-2 p-0 rounded-sm' to={e.to} key={e.id}><Anchor className='flex flex-row gap-4 w-full' key={e.id} to={e.to}>{e.title === 'Home' ? buttonIcons.home : buttonIcons.cities}{e.title}</Anchor></li>)
                        }
                        <hr className="my-2 border-blue-gray-50" />
                        {
                            user &&
                            userButtons.map((button) => (
                                <li className='mb-2 p-0 rounded-sm' key={button.id}>
                                    <Anchor className='flex flex-row gap-4 w-full' to={button.to} key={button.id}>

                                        {button.id && buttonIcons[button.id] && buttonIcons[button.id]}
                                        {button.title}
                                    </Anchor>
                                </li>
                            ))
                        }
                        {
                            user ?
                                <hr className="my-2 border-blue-gray-50" />
                                : null
                        }
                        <li className='p-0 rounded-sm'>
                            {user ?
                                <button onClick={handleSignOutButton} className='flex justify-center w-full bg-red-500 hover:bg-red-900 my-2' to='/signout'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>Sign Out</button>
                                :
                                <Anchor className='flex justify-center w-full bg-teal-700 hover:bg-teal-900 my-2' to='/sign'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>Sign In</Anchor>}
                        </li>
                        <hr className="my-2 border-blue-gray-50" />
                        {
                            user && <div>
                                <div className='flex flex-row justify-center'>
                                    <p className='text-lg'>Signed in as: <span className='text-lg font-medium'>{user.name}</span></p>
                                </div>
                                <hr className="my-2 border-blue-gray-50" />
                            </div>
                        }
                        <h5 className='text-center mt-4'>MyTinerary 2024</h5>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Main