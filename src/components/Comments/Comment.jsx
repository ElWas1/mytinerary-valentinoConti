const Comment = ({ comment, ownComment, user, time, userImage }) => {

  const handleDeletecomment = () => {
    console.log('hola');
  }

  return (
    <div className="mb-12">
      <div className="flex flex-row mb-6">
        <img className="max-md:h-10 max-md:w-10 md:h-12 md:w-12 rounded-xl" src={userImage} alt="" />
        <h3 className="max-md:ml-3 md:ml-4 mb-1 text-lg self-center">{user} at <span className="text-sm text-gray-400">{time}</span></h3>
        {ownComment ? <button className="max-md:text-xs max-md:max-h-min max-md:max-w-min md:ml-4 max-md:p-1 md:p-2 bg-red-900 rounded-xl" onClick={handleDeletecomment}>Delete comment</button>: null}
      </div>
      <div className="flex flex-wrap outline outline-1 outline-gray-500 max-md:p-2 md:p-4 rounded-xl max-w-full">
        {comment}
      </div>

    </div>
  )
}

export default Comment