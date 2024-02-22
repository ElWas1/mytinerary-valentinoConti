import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { post_comment } from '../../../store/actions/userActions.js';
import { get_comments } from '../../../store/actions/itineraryActions.js';

const CommentInput = ({ itineraryId, userId, update }) => {

    const [updatedValue, setUpdatedValue] = useState(1)

    const user = useSelector(store => store.user.user)

    const inputDiv = useRef(null);
    const commentInputContent = useRef(null);
    const postCommentButton = useRef(null);

    const dispatch = useDispatch();

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max)
    }

    const handlePostComment = () => {
        if (commentInputContent.current.value.trim() !== '') {
            const object = {
                comment: commentInputContent.current.value.trim(),
                itineraryId: itineraryId,
                userId: userId
            }
            dispatch(post_comment(object))
            commentInputContent.current.value = ''

            inputDiv.current.className = "flex flex-row bg-black outline outline-1 outline-red-500 rounded-xl mt-16 w-full p-2 duration-500"
            commentInputContent.current.placeholder = 'Please, wait 10 seconds before commenting again.'
            commentInputContent.current.disabled = true
            postCommentButton.current.disabled = true
            setTimeout(() => {
                inputDiv.current.className = "flex flex-row bg-black outline outline-1 outline-green-500 rounded-xl mt-16 w-full p-2 duration-500"
                commentInputContent.current.placeholder = 'Post a comment...'
                commentInputContent.current.disabled = false
                postCommentButton.current.disabled = false
            }, 10000)
            setTimeout(() => {
                setUpdatedValue(getRandomInt(999999999999999))
                update(updatedValue)
            }, 500)
        }
    }

    useEffect(() => {
        dispatch(get_comments(itineraryId))
        if (user) {
            inputDiv.current.className = "flex flex-row bg-black outline outline-1 outline-green-500 rounded-xl mt-16 w-full p-2"
        } else {
            inputDiv.current.className = "flex flex-row bg-black outline outline-1 outline-red-500 rounded-xl mt-16 w-full p-2"
        }
    }, [])

    return (
        <>
            <div ref={inputDiv} className="flex flex-row bg-black outline outline-1 outline-green-500 rounded-xl mt-16 w-full p-2">
                {user ?
                    <input disabled={false} ref={commentInputContent} className="bg-black w-full p-1 rounded-xl outline-none" name="comment" id={itineraryId} type="text" placeholder="Post a comment..." />
                    : <input disabled={true} ref={commentInputContent} className="bg-black w-full p-1 rounded-xl outline-none" name="comment" type="text" placeholder="Sign In to post comments." />}
                {user ? <button ref={postCommentButton} disabled={false} onClick={handlePostComment}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="self-center w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </button> : null}
            </div>
        </>
    )
}

export default CommentInput