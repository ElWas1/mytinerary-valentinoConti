import CitiesCards from '../components/CitiesCards/CitiesCards.jsx';
import { getAllCities } from '../services/cityService.js';
import { useEffect, useState, useRef } from 'react';

const Cities = () => {

    const [cities, setCities] = useState([]);

    const cityInput = useRef(null)

    useEffect(() => {
        getAllCities()
            .then(setCities)
            .catch(error => console.log(error))
    }, []);

    const handleCitySearch = async () => {
        const search = cityInput.current.value.trim()
        let query = '?'
        if (search) {
            query += 'name=' + search
        }
        getAllCities(query).then(setCities)
    }

    return (
        <div className="min-h-[calc(100vh/1.5)] bg-center bg-fixed bg-auto" style={{ "backgroundImage": "url('/beach.jpg')" }}>
            <h2 className="text-center max-md:text-6xl md:text-8xl font-bold pt-16 text-black">Cities</h2>
            <div className="bg-slate-500/50 backdrop-blur-lg max-sm:mt-36 sm:mt-48 p-8 min-w-screen min-h-[50vh] flex flex-col items-center">
                <input
                    className='p-4'
                    ref={cityInput}
                    placeholder='Search for a city...'
                    type="text"
                    name="name"
                    id="name"
                    autoComplete='off'
                />

                <button
                    onClick={handleCitySearch}
                    className='p-3 bg-slate-500 mt-4 rounded-xl hover:bg-slate-700 duration-500'
                    id='search'
                    type="button">
                    Search
                </button>
                <div className='mt-16 flex flex-wrap justify-center gap-4'>
                    {cities?.map((e) => <CitiesCards link={`/cities/${e._id}`} key={e._id} image={e.image} country={e.country} city={e.name} description={e.description} />)}
                    <h1 className={(cities?.length > 0) ? 'hidden' : 'p-4 rounded-xl max-md:text-2xl max-lg:text-3xl lg:text-4xl block text-center text-red-900 hover:bg-red-500 hover:text-yellow-300 duration-500'}>There are no matching cities with your search.</h1>
                </div>
            </div>
        </div>
    )
}

export default Cities