import axios from 'axios';

const itinerariesQueries = axios.create( {
    baseURL: import.meta.env.VITE_GET_ITINERARIES_API_URL,
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