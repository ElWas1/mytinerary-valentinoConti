import { createReducer } from '@reduxjs/toolkit';
import { user_photo, user_signin, user_signup, user_token, user_google_auth, post_comment, get_user_id, get_countries } from '../actions/userActions.js';

const initialState = {
    image: '',
    user: null,
    token: null,
    comment: '',
    comments: [],
    userId: null,
    userName: [],
    countriesList: []
}

const userReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(user_photo, (state, action) => {
            return {
                ...state,
                photo: action.payload.image
            }
        })
        .addCase(user_signin.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(user_signup.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user
            }
        })
        .addCase(user_token, (state, action) => {
            return {
                ...state,
                user: action.payload.user
            }
        })
        .addCase(user_google_auth.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user
            }
        })
        .addCase(post_comment, (state, action) => {
            return {
                ...state,
                comment: action.payload.comment
            }
        })
        .addCase(get_user_id.fulfilled, (state, action) => {
            return {
                ...state,
                userId: action.payload.userId
            }
        })
        .addCase(get_countries.fulfilled, (state, action) => {
            return {
                ...state,
                countriesList: action.payload.countriesList
            }
        })
)

export default userReducer;