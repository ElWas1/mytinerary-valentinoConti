import { useSelector } from 'react-redux';

import Comment from './Comment.jsx';
import CommentInput from './CommentInput.jsx';

const Comments = ({ itineraryId, userId }) => {

  const commentAuthorId = useSelector((store) => store.itinerary.commentAuthorId)
  const commentId = useSelector((store) => store.itinerary.commentId)

  const commentsArray = useSelector(store => store.itinerary.comments)
  const userName = useSelector((store) => store.itinerary.userName)
  const userImage = useSelector((store) => store.itinerary.userImage)

  let ownComment = () => {
    if (userId === commentAuthorId) {
      ownComment = true
    } else {
      ownComment = false
    }
  }

  return (
    <div className='flex flex-col items-center mb-16'>
      <h1 className='text-5xl mb-8'>Comments</h1>
      <div className='flex flex-col bg-gray-900 md:p-4 rounded-xl w-[70vw]'>
        {commentsArray?.map((e, i) => <Comment key={commentId[i]} ownComment={(userId === commentAuthorId[i]) ? true : false} comment={e} userImage={userImage[i]} user={userName[i]} time="12:00" />)}
        {(commentsArray?.length === 0) ? <h1 className='text-3xl self-center text-yellow-500'>No comments yet.</h1> : null}
        <CommentInput itineraryId={itineraryId} userId={userId} />
      </div>
    </div>
  )
}

export default Comments