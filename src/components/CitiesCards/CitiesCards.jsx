import { Link as Anchor } from 'react-router-dom';

const CitiesCards = ({ image, imageAlt, country, city, description, link }) => {
    return (
        <>
            <Anchor to={link} className="group relative block bg-black rounded-xl lg:h-[42vh]">
                <img
                    alt={imageAlt}
                    src={image}
                    className="rounded-xl absolute inset-0 h-full w-full opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="max-md:w-[80vw] md:w-[44vw] lg:w-[45vw] relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                        {country}
                    </p>

                    <p className="text-xl font-bold text-white sm:text-2xl">{city}</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </Anchor>
        </>
    )
}

export default CitiesCards