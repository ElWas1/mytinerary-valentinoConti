import CitiesCards from '../components/CitiesCards/CitiesCards.jsx';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get_cities } from '../store/actions/cityActions.js';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { change_bg } from '../store/actions/pageActions.js';

const Cities = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const user = useSelector((store) => store.user.user)

    const cities = useSelector((store) => store.city.cities)

    const cityInput = useRef(null)
    const addItineraryButton = useRef(null)
    const clearButton = useRef(null)


    function checkImageCompatibility(urls) {
        return new Promise((resolve, reject) => {
            let compatibleImage = null;
            let completed = 0;

            for (const url of urls) {
                const img = new Image();
                img.onload = () => {
                    if (!compatibleImage) {
                        compatibleImage = url;
                    }
                    completed++;

                    if (completed === urls.length && compatibleImage) {
                        resolve(compatibleImage);
                    } else if (completed === urls.length) {
                        reject(new Error('No compatible images found.'));
                    }
                };
                img.onerror = () => {
                    console.log(`The image ${url} is not compatible.`);
                    completed++;

                    if (completed === urls.length) {
                        reject(new Error('No compatible images found.'));
                    }
                };
                img.src = url;
            }
        });
    }

    useEffect(() => {

        const imageUrls = [
            '/beach.avif',
            '/beach.jpg'
        ];

        dispatch(get_cities())

        checkImageCompatibility(imageUrls)
            .then(compatibleImage => {
                dispatch(change_bg(compatibleImage));
            })
            .catch(error => {
                console.error('No compatible images found:', error);
            });

    }, [dispatch]);

    const handleCitySearch = () => {
        const search = cityInput.current.value.trim()
        let query = '?'
        if (search) {
            query += 'name=' + search
        }

        if (search != '') {
            clearButton.current.className = 'p-3 bg-red-500 mt-4 max-md:text-xs rounded-xl hover:bg-red-950 duration-500'
        } else {
            clearButton.current.className = 'hidden'
        }
        dispatch(get_cities(query))
    }

    const handleCitySearchClear = () => {
        cityInput.current.value = ""
        clearButton.current.className = 'hidden'
        dispatch(get_cities(''))
    }

    const handleAddItinerary = () => {
        if (!user) {
            Swal.fire({
                title: "You have to be logged in to perform this action.",
                text: "Please, proceed to the login page in order to post any cities or itineraries.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/sign')
                }
            });
            return
        }
        Swal.fire({
            title: "Unavailable feature.",
            text: "This feature is unavailable at the moment. Stay tuned for new ones!",
            icon: "info"
        })
    }

    return (
        <div className="min-h-[calc(100vh/1.5)] bg-center bg-fixed bg-auto">
            <h2 className="text-center max-md:text-6xl md:text-8xl font-bold pt-48">Cities</h2>
            <div className="bg-slate-500/50 backdrop-blur-lg max-sm:mt-36 sm:mt-48 p-8 min-w-screen min-h-[50vh] flex flex-col items-center">
                <div className='flex flex-row min-w-full'>

                    <input
                        className='max-md:p-2 max-md:text-sm p-4 min-w-[50vw] rounded-md ml-auto'
                        ref={cityInput}
                        placeholder='Search for a city...'
                        type="text"
                        name="name"
                        id="name"
                        autoComplete='off'
                    />
                    <button
                        onClick={handleCitySearch}
                        className='max-md:p-2 max-md:text-sm p-3 max-md:ml-0 ml-4 bg-slate-500 rounded-xl hover:bg-slate-700 duration-500'
                        id='search'
                        type="button">
                        Search
                    </button>
                    <button
                        onClick={handleAddItinerary}
                        className={user ? 'bg-black max-md:p-2 max-md:text-xs p-4 rounded-md md:ml-auto'
                            : 'bg-gray-900 max-md:p-2 max-md:text-xs p-4 rounded-md md:ml-auto'}
                        ref={addItineraryButton}>
                        Add a city/itinerary
                    </button>
                </div>


                <button
                    ref={clearButton}
                    className='hidden'
                    onClick={handleCitySearchClear}>
                    Clear search
                </button>
                <div className='mt-16 flex flex-wrap justify-center gap-4'>
                    {cities?.map((e) => <CitiesCards link={`/cities/${e._id}`} key={e._id} image={e.image} country={e.country} city={e.name} description={e.description} />)}
                    <h1 className={(cities?.length > 0) ? 'hidden' : 'p-4 rounded-xl max-md:text-2xl max-lg:text-3xl lg:text-4xl block text-center text-white hover:bg-red-500/40 hover:text-yellow-300 duration-500'}>There are no matching cities with your search.</h1>
                </div>
            </div>
        </div>
    )
}

export default Cities