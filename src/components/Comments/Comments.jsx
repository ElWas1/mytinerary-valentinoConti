import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import Comment from './Comment.jsx';
import CommentInput from './CommentInput.jsx';
import { get_comments, get_itineraries_by_city_id } from '../../store/actions/itineraryActions.js';
import { get_user_id } from '../../store/actions/userActions.js';

const Comments = ({ itineraryId, userId, cityId, update }) => {

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user.user?.email)

  const itineraries = useSelector((store) => store.itinerary.itineraries)

  const currentItineraryComments = itineraries.find((e) => e._id === itineraryId)

  const commentAuthorId = useSelector((store) => store.itinerary.commentAuthorId)

  useEffect(() => {
    try {
      dispatch(get_user_id(user))
      dispatch(get_comments(itineraryId))
      let query = '?'
        if (cityId) {
            query += 'cityId=' + cityId
            dispatch(get_itineraries_by_city_id(query))
        }
    } catch (error) {
      console.log(error);
    }
  }, [update, dispatch])

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
        {currentItineraryComments?.comments.map((e) =>
          (e.itineraryId === itineraryId) ? <Comment update={updatedValue => setUpdate(updatedValue)} key={e._id} singleCommentId={e._id} ownComment={(userId === e.user._id) ? true : false} comment={e.comment} userImage={e.user.image} username={e.user.username} time="12:00" /> : null)
        }
        {currentItineraryComments.comments.length === 0 ? <h1 className='max-md:text-2xl md:text-3xl self-center text-yellow-500 mt-4'>No comments yet.</h1> : null}
        <CommentInput update={updatedValue => update(updatedValue)} itineraryId={itineraryId} userId={userId} />
      </div>
    </div>
  )
}

export default Comments