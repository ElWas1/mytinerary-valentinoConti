import { createReducer } from "@reduxjs/toolkit";
import { get_cities, get_city_by_id } from "../actions/cityActions.js";

const initialState = {
    cities: [],
    city: {}
};

const cityReducer = createReducer(initialState,
    (builder) => builder
        .addCase(get_cities.fulfilled, (state, action) => {
            return {
                ...state,
                cities: action.payload.cities
            }
        })
        .addCase(get_city_by_id.fulfilled, (state, action) => {
            return {
                ...state,
                city: action.payload.city
            }
        })
)

export default cityReducer;