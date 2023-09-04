const ItineraryPrice = ({ price }) => {
    const imgSrc = '/cash.png';
    const images = [];

    for (let i = 0; i < price; i++) {
        images.push(
            <img
                key={i}
                className="h-6 w-6"
                src={imgSrc}
                alt='Price images'
            />
        );
    }

    return <div className="flex flex-row gap-2 pt-2">{images}</div>;
};

export default ItineraryPrice