import { createReducer } from "@reduxjs/toolkit";
import { page_is_loading } from "../actions/pageActions";

const initialState = {
    loading: true
}

const pageReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(page_is_loading, (state, action) => {
            return {
                ...state,
                loading: action.payload.page_is_loading
            }
        })
})

export default pageReducer