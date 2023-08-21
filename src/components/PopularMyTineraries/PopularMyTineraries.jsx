import { useState, useEffect } from "react"
import CarouselCities from "../CarouselCities/CarouselCities.jsx";

const PopularMyTineraries = () => {

    const carouselItemsClass = 'rounded-bl-3xl rounded-tr-3xl object-cover max-sm:w-[45vw] max-sm:h-[12vh] max-md:w-[47vw] max-md:h-[15vh] md:max-lg:w-[35vw] md:max-lg:h-[13vh] max-xl:w-[22vw] max-xl:w-[20vh] xl:w-[23vw] xl:h-[30vh]'

    const [index, setIndex] = useState(0)
    const [intervalId, setIntervalId] = useState(0)

    useEffect(() => {
        if (intervalId != null) {
            let id = setInterval(nextSlideAuto, 7000)
            setIntervalId(id)
            return () => clearInterval(Number(id))
        }
    }, [index])

    const slide = (i) => {
        setIndex(i)
        setIntervalId(null)
    }

    const prevSlide = () => {
        let i = index - 1
        if (i < 0) {
            i = divImages.length - 1
        }
        slide(i)
    }

    const nextSlide = () => {
        let i = index + 1
        if (i === divImages.length) {
            i = 0
        }
        slide(i)
    }

    const nextSlideAuto = () => {
        let i = index + 1
        if (i === divImages.length) {
            i = 0
        }
        setIndex(i)
    }

    const divImages = [
        {
            image1: "https://www.civitatis.com/blog/wp-content/uploads/2016/05/Estatua-de-la-Libertad.jpg", city1: "New York", country1: "USA",
            image2: "https://media.admagazine.com/photos/618a5ef1a8ad6c5249a74d1d/4:3/w_2000,h_1500,c_limit/91683.jpg", city2: "Tokyo", country2: "Japan",
            image3: "https://www.universal-assistance.com/uablog/wp-content/uploads/2022/12/big-ben.png", city3: "London", country3: "UK",
            image4: "https://encolombia.com/wp-content/uploads/2021/02/Geografia-de-Hong-Kong.jpg", city4: "Hong Kong", country4: "China"
        },
        {
            image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg", city1: "Paris", country1: "France",
            image2: "https://apiimg.iberostar.com/uploads/image/36014/crops/16:9/720/image.jpeg", city2: "Barcelona", country2: "Spain",
            image3: "https://revistavelvet.cl/wp-content/uploads/2022/05/dubai-1.jpeg", city3: "Dubai", country3: "Arab Emirates",
            image4: "https://upload.wikimedia.org/wikipedia/commons/0/00/ObeliscoBA2015.2.jpg", city4: "Buenos Aires", country4: "Argentina"
        },
        {
            image1: "https://www.visitbrasil.com/wp-content/uploads/2021/06/GettyImages-1166728645.jpg", city1: "São Paulo", country1: "Brazil",
            image2: "https://www.civitatis.com/blog/wp-content/uploads/2020/05/estambul-un-dia.jpg", city2: "Istanbul", country2: "Turkey",
            image3: "https://img.bekiaviajes.com/articulos/portada/68000/68170.jpg", city3: "Rome", country3: "Italy",
            image4: "https://media.cnn.com/api/v1/images/stellar/prod/180413132330-12-las-vegas-casinos.jpg?q=w_2599,h_1462,x_0,y_0,c_fill", city4: "Las Vegas", country4: "USA"
        }
    ]

    return (

        <div className="bg-gray-600/50 backdrop-blur-md text-center self-center relative mt-12 md:px-8 md:py-2 max-md:px-1 max-md:mx-2 rounded-xl mb-4">
            <h1 className="max-sm:text-xl text-4xl md:mb-4">Popular MyTineraries</h1>
            <p className="max-md:pb-2 md:pb-4">Autoslide is turned {intervalId ? "on" : "off"}</p>
            <div id="carousel-page-1" className="flex flex-wrap md:gap-2 max-md:gap-1 justify-evenly">
                <CarouselCities className={carouselItemsClass} image={divImages[index].image1} city={divImages[index].city1} country={divImages[index].country1} />
                <CarouselCities className={carouselItemsClass} image={divImages[index].image2} city={divImages[index].city2} country={divImages[index].country2} />
                <CarouselCities className={carouselItemsClass} image={divImages[index].image3} city={divImages[index].city3} country={divImages[index].country3} />
                <CarouselCities className={carouselItemsClass} image={divImages[index].image4} city={divImages[index].city4} country={divImages[index].country4} />
            </div>
            <button className="max-md:m-4 md:m-2 bg-purple-800 hover:bg-red-500 duration-500 rounded-xl p-2" onClick={prevSlide}>Prev</button>
            <button className="max-md:m-4 md:m-2 bg-purple-800 hover:bg-green-700 duration-500 rounded-xl p-2" onClick={nextSlide}>Next</button>
        </div>
    )
}

export default PopularMyTineraries