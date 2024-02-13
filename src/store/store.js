import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducers.js';
import cityReducer from './reducers/cityReducers.js';
import itineraryReducer from './reducers/itineraryReducers.js';
import likeReducer from './reducers/likeReducers.js';
import pageReducer from './reducers/pageReducer.js';

export const store = configureStore({
    reducer: {
        user: userReducer,
        city: cityReducer,
        itinerary: itineraryReducer,
        like: likeReducer,
        page: pageReducer
    }
})

export default store;