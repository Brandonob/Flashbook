import React, { useEffect, useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import ProfileIntro from './ProfileIntro'
import ProfileFriends from './ProfileFriends'
import ProfilePhotos from './ProfilePhotos'
import CreatePost from '../Posts/CreatePost'
import Posts from '../Posts/Posts'
import firebase from "firebase/app";
import { fetchUserPosts } from '../Posts/postsSlice'
import { selectID } from '../Users/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import './Profile.css'

const Profile = () => {
    const userId = useSelector(selectID);
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log(userId);
        if (userId) {
            console.log("User has successfully logged in!");
            dispatch(fetchUserPosts(userId))
        }
      
    }, [])

    return (
        <div >
            <div className="profileHeader">
                <div className="imageDiv"></div>
                <div className="avatarDiv">
                    <div >
                        <Avatar id="pAvatar" alt="John Doe" src="">J</Avatar>
                    </div>
                    <div>
                        <h1>Fname Lname</h1>
                    </div>
                    <section className="profileOptions">
                        <div>
                            <section>
                                <h1>Posts</h1>
                            </section>
                            <section>
                                <h1>About</h1>
                            </section>
                            <section>
                                <h1>Friends</h1>
                            </section>
                            <section>
                                <h1>Photos</h1>
                            </section>
                            <section>
                                <h1>More</h1>
                            </section>
                        </div>
                        <div>
                            <section>
                                <h5>Edit Profile</h5>
                            </section>
                            <section></section>
                            <section></section>
                            <section></section>
                        </div>
                    </section>
                </div>
            </div>
            <div className="profileBody">
                <div className="leftSection">
                    <ProfileIntro />
                    <ProfileFriends />
                    <ProfilePhotos />
                </div>
                <div className="rightSection">
                    <CreatePost />
                    <Posts />
                </div>
            </div>
        </div>
    )
}

export default Profile
