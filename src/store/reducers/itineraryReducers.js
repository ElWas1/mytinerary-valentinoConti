import { createReducer } from "@reduxjs/toolkit";
import { get_itineraries, get_itineraries_by_city_id, get_comments } from "../actions/itineraryActions.js";

const initialState = {
    itineraries: [],
    comments: [],
    commentId: [],
    userName: null,
    userImage: '',
    userId: null,
    itineraryId: []
};

const itineraryReducer = createReducer(initialState,
    (builder) => builder
        .addCase(get_itineraries.fulfilled, (state, action) => {
            return {
                ...state,
                itineraries: action.payload.itineraries
            }
        })
        .addCase(get_itineraries_by_city_id.fulfilled, (state, action) => {
            return {
                ...state,
                itineraries: action.payload.itineraries
            }
        })
        .addCase(get_comments.fulfilled, (state, action) => {
            return {
                ...state,
                comments: action.payload.comments,
                commentId: action.payload.commentId,
                itineraryId: action.payload.itineraryId,
                userName: action.payload.userName,
                userImage: action.payload.userImage,
                commentAuthorId: action.payload.commentAuthorId
            }
        })
)

export default itineraryReducer;