import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/Users/usersSlice'
import postsReducer from '../features/Posts/postsSlice'



export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer
  },
});
