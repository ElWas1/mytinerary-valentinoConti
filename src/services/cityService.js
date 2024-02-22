import axios from 'axios';

const citiesQueries = axios.create( {
    baseURL: 'https://mytinerary-back-valentinoconti.onrender.com/api/cities',
} )

export const getAllCities = async (queryParams="") => {
    try {
        const response = await citiesQueries(queryParams)
        return response.data.cities
    } catch {
        return []
    }
}

export const getCityById = async (id="") => {
    try {
        const response = await citiesQueries(id)
        return response.data.city
    } catch {
        return []
    }
}