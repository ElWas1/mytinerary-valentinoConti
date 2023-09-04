import { createAction } from "@reduxjs/toolkit";
import { getLikeNumAndAddOne } from "../../services/likeService";

export const click_heart = createAction('click_heart', (e) => {
    return {
        payload: {
            like: !e,
            likeNum: getLikeNumAndAddOne() // Async Likes request under development
        }
    }
})
