import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getAPI } from '../Utils/Util'


const API = getAPI();

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        allPosts: [],
        singleUserPosts: []
    },
    reducers: {
        recieveUserPosts: (state, action) => {
           
            state["allPosts"] = action.payload
        },
        recieveSinglePost: (state, action) => state["allPosts"] = [action.payload, ...state], 
        recieveSingleUserPosts: (state, action) => {
            state["singleUserPosts"] = action.payload
        },
        logOutUserPosts: (state, action) => {
            state["allPosts"] = []
            state["singleUserPosts"] = []
        }
    }
})

export const fetchUserPosts = () => async (dispatch) => {
    try {
        let res = await axios.get(`${API}/posts`);
        const { posts } = res.data.body;
        debugger
        dispatch(recieveUserPosts(posts))
    } catch (error) {
        console.log(error.message);
    }
}
export const fetchSingleUserPosts = (currentUserID) => async (dispatch) => {
    try {
        let res = await axios.get(`${API}/posts/ownerID/${currentUserID}`);
        const { posts } = res.data.body;
        debugger
        dispatch(recieveSingleUserPosts(posts))
    } catch (error) {
        console.log(error.message);
    }
}

export const selectPosts = state => state.posts.allPosts;
export const selectSingleUPosts = state => state.posts.singleUserPosts;



;
export const { recieveUserPosts, recieveSinglePost, recieveSingleUserPosts, logOutUserPosts } = postsSlice.actions;
export default postsSlice.reducer;