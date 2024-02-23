import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllItineraries, getItinerariesByCityId } from '../../services/itineraryService.js';
import axios from 'axios';

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

export const get_comments = createAsyncThunk('get_comments', async (obj) => {
    try {

        const response = await axios.get(import.meta.env.VITE_GET_ITINERARIES_COMMENTS_API_URL + obj)

        return {
            comments: response.data.commentsArray.map((e) => e),
            commentId: response.data.commentsArray.map((e) => e._id),
            itineraryId: response.data.commentsArray.map((e) => e.id),
            userName: response.data.commentsArray.map((e) => e.user.name),
            userImage: response.data.commentsArray.map((e) => e.user.image),
            commentAuthorId: response.data.commentsArray.map((e) => e.user._id),
        }

    } catch {
        return {
            comments: []
        }
    }
})