import axios from 'axios';

const citiesQueries = axios.create( {
    baseURL: 'http://localhost:8000/api/cities',
} )

export const getAllCities = async (queryParams="") => {
    try {
        const response = await citiesQueries(queryParams)
        return response.data.cities
    } catch (error) {
        return []
    }
}