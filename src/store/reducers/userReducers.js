import { createReducer } from '@reduxjs/toolkit';
import { user_signin, user_signup, user_token, user_google_auth, post_comment, get_user_id, get_countries, get_user_by_username } from '../actions/userActions.js';

const initialState = {
    user: null,
    token: null,
    comment: '',
    userId: null,
    countriesList: [],
    visitedUser: {}
}

const userReducer = createReducer(
    initialState,
    (builder) => builder
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
        .addCase(post_comment.fulfilled, (state, action) => {
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
        .addCase(get_user_by_username.fulfilled, (state, action) => {
            return {
                ...state,
                visitedUser: action.payload.user
            }
        })
)

export default userReducer;