import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getAPI } from '../Utils/Util'
import { logOut } from '../Posts/postsSlice'

const API = getAPI();

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        currentUserId: "",
        userInfo: []
    },
    reducers: {
        addUser: (state, action) => {
            state["currentUserId"] = action.payload
        },
        recieveUserInfo: (state, action) => {
            state["userInfo"] = action.payload
        },
        logOutUser: (state) => {
            state["currentUserId"] = ""
            state["userInfo"] = []
        }
    }
})

export const fetchUserInfo = (currentUserID) => async (dispatch) => {
    try {
        let res = await axios.get(`${API}/users/${currentUserID}`);
        const { users } = res.data.body;
        console.log(users);
        
        // debugger
        dispatch(recieveUserInfo(users[0]))
    } catch (error) {
        console.log(error.message);
    }
}
export const selectInfo = state => state.users.userInfo
export const selectID = state => state.users.currentUserId

export const { addUser, logOutUser, recieveUserInfo } = usersSlice.actions;
export default usersSlice.reducer;