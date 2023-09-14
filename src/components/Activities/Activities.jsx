import Activity from "./Activity.jsx";

const Activities = ({ activitiesArray }) => {
    return (
        <div className="flex flex-col items-center mb-16">
            <h1 className="text-5xl mb-12">Activities</h1>
            <div className="flex flex-row flex-wrap justify-evenly gap-4">
                {(activitiesArray.length > 0) ? activitiesArray?.map((e) => <Activity key={e.name} image={e.photo} description={e.description} />) : <h1 className="max-md:text-xl md:text-3xl text-yellow-500">The creator of this itinerary didn't include any activities.</h1>}
            </div>
        </div>
    )
}

export default Activities