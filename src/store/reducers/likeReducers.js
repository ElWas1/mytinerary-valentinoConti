import { createReducer } from "@reduxjs/toolkit";
import { click_heart } from '../actions/likeActions';

const initialState = {
    like: false,
    likeNum: 0
};

const likeReducer = createReducer(initialState,
    (builder) => builder
        .addCase(click_heart, (state, action) => {
            return {
                ...state,
                like: action.payload.like,
                likeNum: action.payload.likeNum
            }
        })
)

export default likeReducer;