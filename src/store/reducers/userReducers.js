import { createReducer } from '@reduxjs/toolkit';
import {
    user_signin,
    user_signup,
    user_token,
    user_google_auth,
    post_comment,
    get_user_id,
    get_countries,
    get_user_by_username,
    get_own_id
} from '../actions/userActions.js';

const initialState = {
    user: null,
    token: null,
    ownId: null,
    comment: '',
    userId: null,
    countriesList: [],
    visitedUser: {},
    loading: null,
    rejected: null
}

const userReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(user_signin.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                loading: false
            }
        })
        .addCase(user_signin.pending, (state) => {
            return {
                ...state,
                loading: true
            }
        })
        .addCase(user_signin.rejected, (state) => {
            return {
                ...state,
                loading: false,
                rejected: true
            }
        })
        .addCase(user_signup.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                loading: false
            }
        })
        .addCase(user_signup.pending, (state) => {
            return {
                ...state,
                loading: true
            }
        })
        .addCase(user_signup.rejected, (state) => {
            return {
                ...state,
                loading: false,
                rejected: true
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
                user: action.payload.user,
                rejected: action.payload.rejected,
                loading: false
            }
        })
        .addCase(user_google_auth.pending, (state) => {
            return {
                ...state,
                loading: true
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
        .addCase(get_own_id.fulfilled, (state, action) => {
            return {
                ...state,
                ownId: action.payload.ownId
            }
        })
)

export default userReducer;