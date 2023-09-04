import axios from 'axios';

const itinerariesQueries = axios.create( {
    baseURL: `http://localhost:8000/api/itineraries`,
} )

export const getAllItineraries = async (cityId="") => {
    try {
        const response = await itinerariesQueries(cityId)
        return response.data.itineraries
    } catch {
        return []
    }
}

export const getItinerariesByCityId = async (cityId="") => {
    try {
        const response = await itinerariesQueries(cityId)
        return response.data.itineraries
    } catch {
        return []
    }
}