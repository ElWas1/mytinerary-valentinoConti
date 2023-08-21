import { Link as Anchor, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CityDetails = () => {

    const { id } = useParams();

    const [city, setCity] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cities/${id}`)
            .then(response => setCity(response.data.city))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="flex flex-col items-center in-h-[calc(100vh/1.5)] bg-cover bg-fixed" style={{ "backgroundImage": `url(${city?.image})` }}>
            <Anchor className='self-start bg-slate-500/70 backdrop-blur-lg p-4 rounded xl mt-4 ml-4 font-bold lg:text-xl mb-4 hover:bg-slate-700 duration-500' to={'/cities'}>
                Go back to Cities
            </Anchor>
            <div className='flex flex-col bg-slate-500/70 backdrop-blur-lg items-center mt-72 mb-32 font-bold text-black p-4 rounded-xl hover:bg-slate-500 duration-500'>
                <h1 className='text-6xl mb-2 '>{city?.name}</h1>
                <h5>{"(id:"} <span className='text-red-800'>{id}</span>{")"}</h5>
            </div>
            <div className='bg-slate-500/50 backdrop-blur-lg max-sm:mt-36 sm:mt-48 p-8 min-w-full min-h-[50vh] flex flex-col items-center'>
                <div className='max-sm:text-2xl sm:text-3xl font-bold text-black space-y-4'>
                    <h1>City: <span className='text-gray-200 font-thin'>{city?.name}</span></h1>
                    <h2>Country: <span className='text-gray-200 font-thin'>{city?.country}</span></h2>
                    <h2>Currency: <span className='text-gray-200 font-thin'>{city?.currency}</span></h2>
                    <h2>Language: <span className='text-gray-200 font-thin'>{city?.language}</span></h2>
                    <h2>Description: <span className='text-gray-200 font-thin'>{city?.description}</span></h2>
                </div>
                <div className='text-3xl font bold text-red-500 mt-32 mb-52 p-4 rounded-xl hover:bg-red-500 hover:text-yellow-300 duration-500'>
                    <h2>Currently, cities' itineraries and activities feature is under development.</h2>
                    <h2>Sorry for the incovenience!</h2>
                </div>
            </div>


        </div>
    )
}

export default CityDetails