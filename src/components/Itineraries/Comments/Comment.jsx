import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { delete_comment } from '../../../store/actions/userActions';
import { Link as Anchor } from 'react-router-dom';
import Swal from 'sweetalert2';

const Comment = ({ singleCommentId, comment, ownComment, username, time, userImage, commentUserId }) => {

  const dispatch = useDispatch();

  const deleteButton = useRef(null)

  const commentDiv = useRef(singleCommentId)

  const handleDeletecomment = () => {
    Swal.fire({
      title: 'Are you sure that you want to delete this comment?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(delete_comment(singleCommentId))
        commentDiv.current.remove()
      } else if (result.isDenied) {
        null
      }
    })
  }

  return (
    <div className='mt-4 max-md:ml-2'>
      <div id={singleCommentId} ref={commentDiv} className="mb-8">
        <div className="flex flex-row flex-wrap mb-6">
          <Anchor to={`/user/${username}`}><img className="max-md:h-10 max-md:w-10 md:h-12 md:w-12 rounded-xl" src={userImage} alt="" /></Anchor>
          <h3 className="max-md:ml-3 md:ml-4 mb-1 text-lg self-center"><Anchor className='hover:underline' to={`/user/${username}`}>{username}</Anchor> at <span className="text-sm text-gray-400 mr-2">{time}</span></h3>
          {ownComment ? <button ref={deleteButton} className="max-[329px]:mt-4 max-md:text-xs max-md:max-h-min max-md:max-w-min md:ml-4 max-md:p-1 md:p-2 outline outline-1 outline-red-500 bg-black rounded-xl hover:bg-red-900 duration-300 hover:outline hover:outline-1 hover:outline-red-500" id={singleCommentId} onClick={handleDeletecomment}>Delete comment</button> : null}
        </div>
        <div className="flex flex-wrap outline outline-1 outline-gray-500 max-md:p-2 md:p-4 rounded-xl max-w-[95%]">
          {comment}
        </div>

      </div>
    </div>
  )
}

export default Comment