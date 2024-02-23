import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx';
import { Outlet, Link as Anchor } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { user_signout } from '../store/actions/userActions.js';
import { page_is_loading } from '../store/actions/pageActions.js';

const Main = () => {

    const parentDiv = useRef(null)

    const loaderDiv = useRef(null)

    const loader = useRef(null)

    const contentRef = useRef(null)

    const loading = useSelector(store => store.page.loading)

    const imageClass = 'object-cover w-screen h-screen brightness-50'

    const dispatch = useDispatch()

    const user = useSelector(store => store.user.user)

    const handleUnavailableFeature = () => {
        Swal.fire({
            title: "Unavailable feature.",
            text: "This feature is unavailable at the moment. Stay tuned for new ones!",
            icon: "info"
        })
    }

    const handleSignOutButton = () => {
        Swal.fire({
            title: 'Are you sure that you want to log out?',
            showDenyButton: true,
            confirmButtonText: 'Log out',
            denyButtonText: `Cancel`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You have been logged out!",
                    showConfirmButton: false
                });
                const token = localStorage.getItem('token').toString()
                dispatch(user_signout(token))
            }
        })
    }

    useEffect(() => {

        if (loading) {
            loader.current.style.opacity = 1
            loader.current.style.transform = 'scale(1)'
        }

        const vanishLoader = loading ? setTimeout(() => {
            dispatch(page_is_loading());
            contentRef.current.className = "drawer drawer-end"
            parentDiv.current.className = ""
        }, 2000) : contentRef.current.className = "drawer drawer-end"

        const hideLoader = loading ? setTimeout(() => {
            loaderDiv.current.className = 'hidden'
        }, 3000) : loaderDiv.current.className = 'hidden'

        !loading ? parentDiv.current.className = '' : null

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

        return () => {
            clearTimeout(vanishLoader)
            clearTimeout(hideLoader)
        };
    }, [])

    const loaderContainerStyles = {
        opacity: loading ? 1 : 0,
        transition: 'opacity .5s ease-in-out'
    };

    const loaderStyles = {
        opacity: 0,
        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
        transform: loading ? 'scale(0)' : 'scale(.01)'
    }

    const button = [
        { title: 'Home', to: '/', id: 'home' },
        { title: 'Cities', to: '/cities', id: 'cities' }
    ]

    const userButtons = [
        { title: 'User Settings', to: '/user/settings', id: 'user_settings' },
        { title: 'Saved Itineraries', to: "#", id: 'saved_itineraries', onClick: handleUnavailableFeature },
        { title: 'Liked Itineraries', to: "#", id: 'liked_itineraries', onClick: handleUnavailableFeature },
        { title: 'My Itineraries', to: "#", id: 'my_itineraries', onClick: handleUnavailableFeature }
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
        <div ref={parentDiv} className='overflow-hidden h-screen'>
            <div ref={loaderDiv} className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-gray-900 flex flex-col gap-4 items-center justify-center w-full h-full" style={loaderContainerStyles}>
                <div ref={loader} className='flex flex-col items-center justify-center' style={loaderStyles}>
                    <div className="p-2 mb-8 animate-spin shadow-md shadow-indigo-600 bg-gradient-to-bl from-pink-400 via-purple-700 to-indigo-600 h-24 w-24 aspect-square rounded-full">
                        <div className="rounded-full h-full w-full bg-gray-950 background-blur-md" />
                    </div>
                    <img className='max-md:w-[50%] md:w-[30%] mb-4' src="/suitcase.webp" alt="Logo" />
                    <p className='text-3xl text-white font-bold'>Loading...</p>
                </div>
            </div>
            <div ref={contentRef} className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div id='slide'>
                        <img className={imageClass} src="/boat.webp" alt="Boat" />
                        <img className={imageClass} src="/city.webp" alt="City" />
                        <img className={imageClass} src="/lake1.webp" alt="Lake" />
                        <img className={imageClass} src="/mountains.webp" alt="Mountains" />
                        <img className={imageClass} src="/road.webp" alt="Road" />
                        <img className={imageClass} src="/beach.avif" alt="Beach" />
                        <img className={imageClass} src="/city2.webp" alt="City 2" />
                        <img className={imageClass} src="/boat2.webp" alt="Boat 2" />
                        <img className={imageClass} src="/bridge.webp" alt="Bridge" />
                        <img className={imageClass} src="/river2.webp" alt="River 2" />
                        <img className={imageClass} src="/castle.webp" alt="Castle" />
                        <img className={imageClass} src="/lake2.webp" alt="Lake 2" />
                        <img className={imageClass} src="/city3.webp" alt="City 3" />
                        <img className={imageClass} src="/lake3.webp" alt="Lake 3" />
                        <img className={imageClass} src="/mountains2.webp" alt="Mountains 2" />
                        <img className={imageClass} src="/river.webp" alt="River" />
                        <img className={imageClass} src="/snow.webp" alt="Snow" />
                    </div>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
                <div className="drawer-side z-30">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full max-w-[90vw] bg-base-200 text-base-content">
                        <li className='btn-disabled bg-transparent'>
                            <div className="mb-2 flex items-center justify-center gap-4 p-4">
                                <img src="/suitcase.webp" alt="brand" className="h-8 w-8" />
                                <p>
                                    Menu
                                </p>
                            </div>
                        </li>

                        {
                            button.map((e) => <li className='mb-2 p-0 rounded-sm' to={e.to} key={e.id}><Anchor className='flex flex-row gap-4 w-full' key={e.id} to={e.to}>{e.title === 'Home' ? buttonIcons.home : buttonIcons.cities}{e.title}</Anchor></li>)
                        }
                        {
                            user &&
                            userButtons.map((button) => (
                                <li className='mb-2 p-0 rounded-sm' key={button.id}>
                                    <Anchor className='flex flex-row gap-4 w-full' to={button.to} key={button.id} onClick={button.onClick}>

                                        {button.id && buttonIcons[button.id] && buttonIcons[button.id]}
                                        {button.title}
                                    </Anchor>
                                </li>
                            ))
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
                        {
                            user && <div className='btn-disabled'>
                                <div className='flex flex-row justify-center'>
                                    <p className='text-lg'>Signed in as: <span className='text-lg font-medium'>{user.name}</span></p>
                                </div>
                                <hr className="my-2 border-blue-gray-50" />
                            </div>
                        }
                        <li className='btn-disabled flex items-center'>
                            <p className='text-center mt-2'>MyTinerary 2024</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main