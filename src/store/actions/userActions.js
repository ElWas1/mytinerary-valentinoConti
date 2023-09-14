import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import axios from "axios";

export const user_photo = createAction(
    'user_photo',
    (obj) => {
        return {
            payload: {
                photo: obj.photo
            }
        }
    }
)

export const user_signin = createAsyncThunk(
    'user_signin',
    async (obj) => {
        try {
            const { data } = await axios.post('http://localhost:8000/api/auth/signin', obj.data)
            localStorage.setItem('token', data.response.token)
            localStorage.setItem('user', JSON.stringify(data.response.user))

            Swal.fire(
                'You are Logged In!',
                `Welcome, ${data.response.user.name}!`,
                'success'
              )

            return {
                user: data.response.user,
                token: data.response.token
            }

        } catch (error) {
            console.log(error);
            Swal.fire(
                'You could not Sign In.',
                'Please, check that the credentials you have provided.',
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
            const { data } = await axios.post('http://localhost:8000/api/auth/signup', obj.user)
            localStorage.setItem('token', data.response.token)
            localStorage.setItem('user', JSON.stringify(data.response.user))

            console.log(data);
            Swal.fire(
                'You are registered.',
                'Please, proceed to the Sign In page and Log In.',
                'success'
              )
            return {
                user: data.response.user
            }

        } catch (error) {
            console.log(error);
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

export const user_signout = createAsyncThunk(
    'user_signout',
    async (obj) => {
        try {
            const token = await axios.post('http://localhost:8000/api/auth/signout', null, { headers: { 'Authorization': `Bearer ${obj}` } })
            localStorage.clear();
            window.location.reload();
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
            const { data } = await axios.post('http://localhost:8000/api/auth/google', obj)
            localStorage.setItem('token', data.response.token)
            localStorage.setItem('user', JSON.stringify(data.response.user))

            Swal.fire(
                'You are Logged In!',
                `Welcome, ${data.response.user.name}!`,
                'success'
              )

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

export const post_comment = createAction(
    'post_comment',
    (obj) => {
        try {
            axios.post(`http://localhost:8000/api/itineraries/comment/${obj.id}`, {
                comment: obj.comment,
                user: obj.userId,
                id: obj.id
            })
            console.log(obj);
            return {
                payload: {
                    _id: obj.id,
                    comment: obj.comment,
                    userId: obj.userId
                }
            }

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
            const { data } = await axios.get(`http://localhost:8000/api/users?email=${obj}`)

            return {
                userId: data.users[0]._id.toString(),
                userName: data.users[0].name.toString()
            }

        } catch (error) {
            console.log(error);
            return {
                user: null
            }
        }
    }
)

export const get_countries = createAsyncThunk(
    'get_countries',
    async (obj) => {
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