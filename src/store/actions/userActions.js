import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import axios from "axios";

export const user_signin = createAsyncThunk(
    'user_signin',
    async (obj) => {
        try {
            const { data } = await axios.post(import.meta.env.VITE_SIGN_IN_API_URL, obj.data)
            localStorage.setItem('token', data.response.token)
            localStorage.setItem('user', JSON.stringify(data.response.user))

            Swal.fire({
                title: 'You are Logged In!',
                text: `Welcome, ${data.response.user.name}!`,
                icon: 'success',
                backdrop: '#000'
            })

            return {
                user: data.response.user,
                token: data.response.token
            }

        } catch (error) {
            Swal.fire(
                'You could not sign in.',
                `${error.response.data.message}`,
                'error'
            )
            return {
                user: null
            }
        }
    }
)

export const user_signup = createAsyncThunk(
    'user_signup',
    async (obj) => {
        try {
            const { data } = await axios.post(import.meta.env.VITE_SIGN_UP_API_URL, obj.user)

            Swal.fire(
                'You are registered.',
                'Please, proceed to the Sign In page and Log In.',
                'success'
            )
            return {
                message: data.message
            }

        } catch (error) {
            Swal.fire(
                'You have not been registered.',
                'Please, check that all of the fields are correct.',
                'error'
            )
            return {
                user: null
            }
        }
    }
)

export const user_token = createAction(
    'user_token',
    (user) => {
        return {
            payload: {
                user
            }
        }
    }
)

export const user_renew_token = createAsyncThunk(
    'user_renew_token',
    async (obj) => {
        try {
            const configs = { headers: { 'Authorization': `Bearer ${obj}` } }
            const { data } = await axios.post(import.meta.env.VITE_CHECK_TOKEN_EXPIRATION_API_URL, null, configs)

            localStorage.setItem('token', data.response.token);
        } catch (error) {
            return null
        }
    }
)

export const user_signout = createAsyncThunk(
    'user_signout',
    async (obj) => {
        try {
            const token = await axios.post(import.meta.env.VITE_SIGN_OUT_API_URL, null, { headers: { 'Authorization': `Bearer ${obj}` } })
            localStorage.clear();
            setTimeout(() => {
                window.location.reload();
            }, 800);
            return {
                token: token.data,
            }

        } catch (error) {
            console.log(error);
            return {
                user: null
            }
        }
    }
)

export const user_google_auth = createAsyncThunk(
    'user_google_auth',
    async (obj) => {
        try {
            const { data } = await axios.post(import.meta.env.VITE_GOOGLE_AUTH_API_URL, obj)
            localStorage.setItem('token', data.response.token)
            localStorage.setItem('user', JSON.stringify(data.response.user))

            Swal.fire({
                title: 'You are Logged In!',
                text: `Welcome, ${data.response.user.name}!`,
                icon: 'success',
                backdrop: '#000'
            })

            return {
                user: data.response.user,
                token: data.response.token
            }

        } catch (error) {
            console.log(error);
            return {
                user: null
            }
        }
    }
)

export const post_comment = createAsyncThunk(
    'post_comment',
    async (obj) => {
        try {
            const response = await axios.post(import.meta.env.VITE_POST_COMMENT_API_URL + obj.itineraryId, {
                comment: obj.comment,
                user: obj.userId,
                itineraryId: obj.itineraryId
            })

            return {
                payload: {
                    _id: obj._id,
                    comment: obj.comment,
                    userId: obj.userId,
                    itineraryId: obj.itineraryId
                }
            }

        } catch (error) {
            console.log(error);
            return null
        }
    }
)

export const delete_comment = createAsyncThunk(
    'delete_comment',
    async (obj) => {
        try {
            await axios.delete(import.meta.env.VITE_DELETE_COMMENT_API_URL + obj)

            Swal.fire({
                position: 'top-end',
                icon: 'info',
                title: 'The comment has been deleted.',
                showConfirmButton: false,
                timer: 5000
            })
            return true

        } catch (error) {
            console.log(error);
            return null
        }
    }
)

export const get_user_id = createAsyncThunk(
    'get_user_id',
    async (obj) => {
        try {
            const { data } = await axios.get(import.meta.env.VITE_GET_USER_ID_API_URL + obj)

            return {
                userId: data.users[0]._id.toString(),
                userName: data.users[0].name.toString()
            }

        } catch (error) {
            return {
                user: null
            }
        }
    }
)

export const get_countries = createAsyncThunk(
    'get_countries',
    async () => {
        try {
            const data = await axios.get(`https://restcountries.com/v3.1/all?fields=name`)

            return {
                countriesList: (data.data).sort((a, b) => a.name.common.localeCompare(b.name.common))
            }

        } catch (error) {
            console.log(error);
            return {
                user: null
            }
        }
    }
)

export const get_user_by_username = createAsyncThunk(
    'get_user_by_username',
    async (obj) => {
        try {
            const { data } = await axios.get(import.meta.env.VITE_GET_USER_BY_USERNAME_API_URL + obj)

            return {
                user: data.users[0]
            }
        } catch (error) {
            console.log(error);
            return {
                user: null
            }
        }
    }
)

export const get_own_id = createAsyncThunk(
    "get_own_id",
    async (obj) => {
        try {
            const { data } = await axios.get(import.meta.env.VITE_GET_USER_ID_API_URL + obj)

            return {
                ownId: data.users[0]._id.toString()
            }

        } catch (error) {
            console.log(error);
            Swal.fire(
                'Settings could not be updated.',
                'Please, check the credentials that you have provided.',
                'error'
            )
        }
    }
)

export const update_user = createAsyncThunk(
    "update_user",
    async (obj) => {
        try {

            await axios.put(import.meta.env.VITE_UPDATE_USER_API_URL + obj.id, obj)

            Swal.fire({
                title: 'Info has been updated.',
                icon: 'success',
                timer: 5000
            })

        } catch (error) {
            Swal.fire(
                'Settings could not be updated.',
                `${error.response.data.message}`,
                'error'
            )
        }
    }
)

export const delete_user = createAsyncThunk(
    "delete_user",
    async (obj) => {
        try {
            if (!(obj.id || obj.email || obj.password)) {
                return Swal.fire(
                    'There has ocurred an error.',
                    'Please, try again later.',
                    'error'
                )
            }
            await axios.delete(import.meta.env.VITE_DELETE_USER_API_URL + obj.id, { data: obj })

            localStorage.clear();

            setTimeout(() => {
                window.location.reload();
            }, 5000);

            Swal.fire({
                title: 'Your account has been deleted.',
                text: 'We hope to see you again soon!',
                icon: 'success',
                timer: 5000
            })

        } catch (error) {
            console.error(error);
            Swal.fire(
                'Your account could not be deleted.',
                `${error.response.data.message}`,
                'error'
            )
        }
    }
)