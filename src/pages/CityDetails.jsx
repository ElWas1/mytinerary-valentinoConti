import { Link as Anchor, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { get_city_by_id } from '../store/actions/cityActions.js';
import { get_itineraries_by_city_id } from '../store/actions/itineraryActions.js';
import Itinerary from '../components/Itineraries/Itinerary.jsx';

const CityDetails = () => {

    const { id } = useParams();
    const city = useSelector((store) => store.city.city)
    const itineraries = useSelector((store) => store.itinerary.itineraries)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_city_by_id(id))
        let query = '?'
        if (id) {
            query += 'cityId=' + id
            dispatch(get_itineraries_by_city_id(query))
        }
    }, [dispatch])

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
                <h1 className='my-8 text-5xl text-black font-bold bg-slate-500/60 p-4 rounded-xl sm:px-[20vw]'>Itineraries</h1>
                {(itineraries.length > 0) ? itineraries?.map((e) => <Itinerary key={e._id} title={e.title} userPhoto={e.created_by.image} userName={e.created_by.name} price={e.price} duration={e.duration} activities={e.activities}
                    hashtags={e.hashtags} likes={e.likes} activityPhoto={e.activities.photo} activityDescription={e.activities.description} />) : <h1 className="p-4 rounded-xl max-md:text-2xl max-lg:text-3xl lg:text-4xl block text-center text-red-900 hover:bg-red-500 hover:text-yellow-300 duration-500">There are no itineraries for this city, for now...</h1>}
            </div>
        </div>
    )
}

export default CityDetails