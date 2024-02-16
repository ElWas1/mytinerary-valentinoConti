import { createReducer } from "@reduxjs/toolkit";
import { page_is_loading, change_bg } from "../actions/pageActions";

const initialState = {
    loading: true,
    currentBg: null
}

const pageReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(page_is_loading, (state, action) => {
            return {
                ...state,
                loading: action.payload.page_is_loading
            }
        })
        .addCase(change_bg, (state, action) => {
            return {
                ...state,
                currentBg: action.payload.currentBg
            }
        })
})

export default pageReducer