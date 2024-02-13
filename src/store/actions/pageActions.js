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