import { createReducer } from "@reduxjs/toolkit";
import { get_itineraries, get_itineraries_by_city_id } from "../actions/itineraryActions.js";

const initialState = {
    itineraries: []
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
)

export default itineraryReducer;