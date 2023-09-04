import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllItineraries, getItinerariesByCityId } from '../../services/itineraryService.js';

export const get_itineraries = createAsyncThunk('get_itineraries', async (id) => {
    try {
        return {
            itineraries: await getAllItineraries(id)
        }
    } catch {
        return {
            itineraries: []
        }
    }
})

export const get_itineraries_by_city_id = createAsyncThunk('get_itineraries_by_city_id', async (id) => {
    try {
        return {
            itineraries: await getItinerariesByCityId(id)
        }
    } catch {
        return {
            itineraries: []
        }
    }
})