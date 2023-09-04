import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Activities from '../Activities/Activities';
import Heart from "react-heart";
// import { click_heart } from '../../store/actions/likeActions';
import ItineraryPrice from '../ItineraryPrice/ItineraryPrice';

const Itinerary = ({
    title, userPhoto, userName, price, duration, activities,
    hashtags, likes, activityPhoto, activityDescription }) => {

    const hideableDiv = useRef(null);
    const hideDivButton = useRef(null);

    const dispatch = useDispatch();

    const [liked, setLiked] = useState(false)

    // const active = useSelector((store) => store.like.like) 
    // For global uses (identifying by _id, and requesting total amount of likes by every user) in the future, local use for now.

    // const handleLikeIcon = (e) => {
    //     dispatch(click_heart(e))
    // }

    const handleHideableDiv = () => {
        if (hideableDiv.current.className === 'hidden') {
            hideableDiv.current.className = 'flex flex-col flex-wrap'
            hideDivButton.current.innerText = 'Show less'
        } else {
            hideableDiv.current.className = 'hidden'
            hideDivButton.current.innerText = 'Show more'
        }
    }

    return (
        <div className="flex flex-col flex-wrap min-w-[80vw] bg-black rounded-xl gap-4 p-4 mb-4">
            <h1 className='mt-4 self-center max-md:text-3xl md:text-4xl'>{title}</h1>
            <div className="flex flex-wrap justify-evenly items-center gap-4 p-4">
                <div className='flex flex-row gap-4'>
                    <h3 className='text-2xl'>{'Price: '}</h3>
                    <ItineraryPrice price={price} />
                </div>
                <div>
                    <h4 className='text-2xl'>{'Duration: ' + duration + ' hours'}</h4>
                </div>
                <div className='flex flex-col flex-wrap items-center gap-4'>
                    <h3>{hashtags.map((e) => e + ' ')}</h3>
                    <Heart className='w-6 h-6' isActive={liked} onClick={() => setLiked(!liked)} inactiveColor="white" animationTrigger="hover" animationScale={1.2} />
                    <h4>{likes + ' Likes'}</h4>
                </div>
                <div className='flex flex-col flex-wrap gap-4'>
                    <img className="rounded-xl max-md:w-[50vw] md:w-[25vw] max-h-[30vh] mb-4" src={userPhoto} alt={userName + "'s profile photo"} />
                    <h2 className="self-center text-xl">{'Created by: ' + userName}</h2>
                </div>
            </div>
            <div className="hidden" ref={hideableDiv}>
                <div className="max-w-[75vw] self-center">
                    {/* <h1 className="text-4xl">Activities</h1> */}
                    <Activities />
                </div>
                {/* <div className="self-center">
                    <h1 className="text-4xl">Comments</h1>
                </div> */}
            </div>
            <button className="bg-white text-black text-xl p-4 rounded-xl outline outline-black outline-2 hover:bg-black hover:text-white hover:outline-white duration-500" onClick={handleHideableDiv} ref={hideDivButton}>Show more</button>
        </div>
    )
}

export default Itinerary;