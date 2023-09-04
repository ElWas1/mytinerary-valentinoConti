import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCities, getCityById } from '../../services/cityService.js';

export const get_cities = createAsyncThunk('get_cities', async (name) => {
    try {
        return {
            cities: await getAllCities(name)
        }
    } catch {
        return {
            cities: []
        }
    }
})

export const get_city_by_id = createAsyncThunk('get_city_by_id', async (id) => {
    try {
        return {
            city: await getCityById(id)
        }
    } catch {
        return {
            city: {}
        }
    }
})