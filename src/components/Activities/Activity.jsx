const Activity = ({ image, description }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
        <img className="max-md:w-[25vw] max-md:h-[10vh] md:w-[30vw] md:h-[30vh] rounded-xl" src={image} alt={description}/>
        <h2 className="md:text-2xl text-gray-300">{description}</h2>
    </div>
  )
}

export default Activity