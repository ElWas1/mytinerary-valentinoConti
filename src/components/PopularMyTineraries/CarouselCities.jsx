import { Link as Anchor } from "react-router-dom"

const Cards = ({ id, image, city, country, className }) => {
    return (
        <Anchor to={`/cities/${id}`} className="block">
            <img
                alt={city}
                src={image}
                className={className}
            />

            <div className="sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong className="font-medium">{country}</strong>

                <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p className="mt-0.5 opacity-50 sm:mt-0">{city}</p>
            </div>
        </Anchor>
    )
}

export default Cards