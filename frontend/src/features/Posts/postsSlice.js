import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getAPI } from '../Utils/Util'

const API = getAPI();

export const postsSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        recieveAllPosts: (state, action) => action.payload
    }
})

export const fetchAllPosts = () => async dispatch => {
    try {
        let res = await axios.get(`${API}/posts`);
        const { posts } = res.data.body;
        // debugger
        dispatch(recieveAllPosts(posts))
    } catch (error) {
        console.log(error.message);
    }
}

export const selectPosts = state => state.posts

export const { recieveAllPosts } = postsSlice.actions;
export default postsSlice.reducer;