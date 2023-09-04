import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducers.js';
import cityReducer from './reducers/cityReducers.js';
import itineraryReducer from './reducers/itineraryReducers.js';
import likeReducer from './reducers/likeReducers.js';

export const store = configureStore({
    reducer: {
        user: userReducer,
        city: cityReducer,
        itinerary: itineraryReducer,
        like: likeReducer
    }
})

export default store;