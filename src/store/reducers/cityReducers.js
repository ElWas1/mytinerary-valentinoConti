import { createReducer } from "@reduxjs/toolkit";
import { get_cities, get_city_by_id } from "../actions/cityActions.js";

const initialState = {
    cities: [],
    city: {},
    loading: null
};

const cityReducer = createReducer(initialState,
    (builder) => builder
    .addCase(get_cities.pending, (state) => {
        return {
            ...state,
            loading: true
        }
    })
        .addCase(get_cities.fulfilled, (state, action) => {
            return {
                ...state,
                cities: action.payload.cities,
                loading: false
            }
        })
        .addCase(get_cities.rejected, (state, action) => {
            return {
                ...state,
                loading: false
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