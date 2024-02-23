import axios from 'axios';

const citiesQueries = axios.create( {
    baseURL: import.meta.env.VITE_GET_CITIES_API_URL,
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