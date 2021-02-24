import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getAPI } from '../Utils/Util'


const API = getAPI();

export const postsSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        recieveUserPosts: (state, action) => action.payload,
        recieveSinglePost: (state, action) => [action.payload, ...state] 
    }
})

export const fetchUserPosts = (currentUserID) => async (dispatch) => {
    try {
        let res = await axios.get(`${API}/posts`);
        const { posts } = res.data.body;
        // debugger
        dispatch(recieveUserPosts(posts))
    } catch (error) {
        console.log(error.message);
    }
}

export const selectPosts = state => state.posts

;
export const { recieveUserPosts, recieveSinglePost } = postsSlice.actions;
export default postsSlice.reducer;