const Cards = ({ image, city, country, className }) => {
    return (
        <a href="#" className="block">
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
        </a>
    )
}

export default Cards