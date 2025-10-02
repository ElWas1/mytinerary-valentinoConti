import { useState, useEffect } from "react"
import CarouselCities from "./CarouselCities.jsx";

import { useSelector, useDispatch } from "react-redux";
import { get_itineraries } from "../../store/actions/itineraryActions.js";


const PopularMyTineraries = () => {

    const storedItineraries = useSelector(store => store.itinerary.itineraries)

    let itineraries = []
    let group = []
    
    const dispatch = useDispatch();
    
    const carouselItemsClass = 'rounded-bl-3xl rounded-tr-3xl max-sm:w-[45vw] max-sm:h-[12vh] max-md:w-[47vw] max-md:h-[15vh] md:max-lg:w-[35vw] md:max-lg:h-[13vh] max-xl:w-[22vw] max-xl:w-[20vh] xl:w-[23vw] xl:h-[30vh]'
    
    const [index, setIndex] = useState(0)
    const [intervalId, setIntervalId] = useState(0)
    const [itineraryCount, setItineraryCount] = useState(0)
    const [itinerariesArray, setItinerariesArray] = useState([])
    
    useEffect(() => {

        dispatch(get_itineraries())

        storedItineraries.forEach((e, index) => {

            setItineraryCount(index + 1)
            // cuando llega a 4 o es el último, lo guardamos y reiniciamos
            if (group.length === 4 || index === storedItineraries.length - 1) {
                itineraries.push(group);
                console.log(itineraries);

                group = [];
            }
            if (index + 1 === storedItineraries.length) {
                setItinerariesArray(itineraries)
            }
        });

        if (intervalId != null && (itineraryCount / 4) > index) {
            let id = setInterval(nextSlideAuto, 7000)
            setIntervalId(id)
            return () => clearInterval(Number(id))
        }

    }, [index, dispatch])

    const slide = (i) => {
        setIndex(i)
        setIntervalId(null)
    }

    const prevSlide = () => {
        let i = index - 1
        if ((itineraryCount / 4) > index) {
            i = itineraryCount / 4 - 1
        }
        slide(i)
    }

    const nextSlide = () => {
        let i = index + 1
        if ((itineraryCount / 4) > index) {
            i = 0
        }
        slide(i)
    }

    const nextSlideAuto = () => {
        let i = (itineraryCount / 4 > 1) ? index + 1 : 0
        if (i === itineraryCount) {
            i = 0
        }
        setIndex(i)
    }

    return (

        <div className="bg-gray-600/50 backdrop-blur-md text-center self-center relative lg:px-8 lg:py-2 max-lg:px-1 max-lg:mx-2 rounded-xl xl:mb-4">
            <h1 className="max-lg:text-xl lg:text-4xl lg:mb-4">Popular MyTineraries</h1>
            <p className="max-lg:pb-2 lg:pb-4">Autoslide is turned {intervalId ? <span className='text-green-500'>on</span> : <span className='text-red-500'>off</span>}</p>
            <div id="carousel-page-1" className="flex flex-wrap md:gap-2 max-md:gap-1 justify-evenly">
                {itineraryCount > 0 ? itinerariesArray[index].map(o => (
                    <CarouselCities
                        id={o.city._id}
                        key={o._id}
                        className={carouselItemsClass}
                        image={o.city.image}
                        city={o.city.name}
                        country={o.city.country}
                    />
                )) : (String(itineraries) === "false") ? "Retrieving itineraries..."
                    : (String(itineraries) === "null") ? "No itineraries could be retrieved, check your internet connection."
                        : null}
            </div>
            <div className="flex flex-row justify-center gap-4">
                <button className="md:m-2 bg-purple-800 hover:bg-red-500 duration-300 rounded-md p-2" onClick={itineraryCount >= 8 ? prevSlide : null}>Prev</button>
                <button className="md:m-2 bg-purple-800 hover:bg-green-700 duration-300 rounded-md p-2" onClick={nextSlide}>Next</button>
            </div>
        </div>
    )
}

export default PopularMyTineraries