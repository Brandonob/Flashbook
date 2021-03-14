import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserPosts, fetchSingleUserPosts, logOutUserPosts } from '../Posts/postsSlice'
import CreatePost from '../Posts/CreatePost'
import './Home.css'
import Posts from '../Posts/Posts'
import LeftContainer from '../Home Page/LeftContainer'
import { logout } from '../Utils/firebaseFunctions'
import { logOutUser, selectID, fetchUserInfo } from '../Users/usersSlice'
import firebase from "firebase/app";

const Home = () => {
    const userId = useSelector(selectID);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        logout();
        dispatch(logOutUser())
        dispatch(logOutUserPosts())
        history.push("/")

    }

    useEffect(() => {
        // console.log(userId);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              console.log("User has successfully logged in!");
              dispatch(fetchUserInfo(user.uid))
              debugger
              dispatch(fetchUserPosts())
              dispatch(fetchSingleUserPosts(user.uid))
            }
          });
         
    }, []);

    return (
        <div className="home">
            <div className="leftSide">
                <LeftContainer/>
            </div>
            <div className="middle">
                <CreatePost/>
                <Posts/>
            </div>
            <div className="rightSide">
                
                <button id="lobutton" onClick={handleClick}>Log Out</button>
            </div>
        </div>
    )
}

export default Home;
