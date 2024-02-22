import { createAction } from "@reduxjs/toolkit";

export const page_is_loading = createAction(
    'page_is_loaded',
    () => {
        return {
            payload: {
                page_is_loading: false
            }
        }
    }
)

export const change_bg = createAction(
    'change_bg',
    (bg) => {
        return {
            payload: {
                currentBg: bg
            }
        }
    }
)

export const change_signup_image = createAction(
    'change_signup_image',
    (img) => {
        return {
            payload: {
                signUpImage: img
            }
        }
})