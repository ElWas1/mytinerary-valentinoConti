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
        { title: 'Home', to: '/', id: 1 },
        { title: 'Cities', to: '/cities', id: 2 }
    ]

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
                            button.map((e) => <li className='mb-2 p-0 rounded-sm' to={e.to} key={e.id}><Anchor className='flex flex-row gap-4 w-full' key={e.id} to={e.to}>{e.title === 'Home' ? homeIcon : citiesIcon}{e.title}</Anchor></li>)
                        }
                        <hr className="my-2 border-blue-gray-50" />
                        <li className={user ? 'p-0 rounded-sm' : 'p-0 rounded-sm'}>
                            {user ?
                                <button onClick={handleSignOutButton} className='flex justify-center w-full bg-red-500 hover:bg-red-900' to='/signout'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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

export default Main