import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchAllPosts } from '../Posts/postsSlice'
import CreatePost from '../Posts/CreatePost'
// import '../../css/homeCss.css'
import Posts from '../Posts/Posts'
import LeftContainer from '../Home Page/LeftContainer'
import { logout } from '../Utils/firebaseFunctions'
import { logOutUser } from '../Users/usersSlice'

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        logout();
        dispatch(logOutUser())
        history.push("/")

    }

    useEffect(() => {
        dispatch(fetchAllPosts())
    }, [])
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
                <button onClick={handleClick}>Log Out</button>
                <h5>Birthdays</h5>
                <h5>Friends</h5>
            </div>
        </div>
    )
}

export default Home;
