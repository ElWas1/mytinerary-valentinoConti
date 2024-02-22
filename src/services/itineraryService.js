import axios from 'axios';

const itinerariesQueries = axios.create( {
    baseURL: `https://mytinerary-back-valentinoconti.onrender.com/api/itineraries`,
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