import React, { useEffect, useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import ProfileIntro from './ProfileIntro'
import ProfileFriends from './ProfileFriends'
import ProfilePhotos from './ProfilePhotos'
import CreatePost from '../Posts/CreatePost'
import Posts from '../Posts/Posts'
import firebase from "firebase/app";
import { fetchUserPosts } from '../Posts/postsSlice'
import { selectID, selectInfo, fetchUserInfo } from '../Users/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Toast } from '../Toastify/Toast'
import EditProfile from './EditProfile'
import { storage } from '../../firebase'
import axios from 'axios'
import './Profile.css'

const Profile = () => {
    // const [showDiv, setShowDiv] = useState(false);
    const [pImage, setPImage] = useState("");
    const [pImageURL, setPImageURL] = useState("");

    const userId = useSelector(selectID);
    const dispatch = useDispatch();
    const userInfo = useSelector(selectInfo);

    useEffect(() => {
        // console.log(userId);
        if (userId) {
            console.log("User has successfully logged in!");
            dispatch(fetchUserPosts(userId))
        }
      
    }, [])

    const handlepChange = e => {
        // if (e.target.files[0]) {
        //     setPImage(e.target.files[0])
        // }
        debugger
            const image = e.target.files[0];
            const uploadMedia = storage.ref(`images/${image.name}`).put(image);
            uploadMedia.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log(error.message);
                },
                () => {
                    storage
                        .ref("images")
                        .child(pImage.name)
                        .getDownloadURL()
                        .then(async url => {
                            debugger
                            setPImageURL(url)
                            try {
                                await axios.patch(`/users/profile_pic/${userInfo.id}`, {
                                    profile_pic: url
                                  });
                                  dispatch(fetchUserInfo(userInfo.id))
                            } catch (error) {
                                console.log(error.message);
                            }
                        });
                }
            );
            // CustomToast("Image selected")
    }

    // const handleEditClick = (e) => {
    //     e.preventDefault();
    //     setShowDiv(true)
    // }


    return (
        <div >
            <div className="profileHeader">
                <div className="imageDiv">

                </div>
                <div className="avatarDiv">
                    <div >
                        <input id="profilepicInput" type="file" onChange={handlepChange} />
                        <label for="profilepicInput">
                            <Avatar id="pAvatar" alt="John Doe" src={userInfo.profile_pic}>J</Avatar>
                        </label>
                    </div>
                    <div>
                        <h1>{userInfo.first_name} {userInfo.last_name}</h1>
                    </div>
                    <section className="profileOptions">
                        <div>
                            <section >
                                <h5>Posts</h5>
                            </section>
                            <section onClick={Toast}>
                                <h5>About</h5>
                            </section>
                            <section onClick={Toast}>
                                <h5>Friends</h5>
                            </section>
                            <section onClick={Toast}>
                                <h5>Photos</h5>
                            </section>
                            <section onClick={Toast}>
                                <h5>More</h5>
                            </section>
                        </div>
                        <div>
                            <section onClick={Toast}>
                                <h5>Edit Profile</h5>
                            </section>
                            {/* <section onClick={Toast}></section>
                            <section onClick={Toast}></section>
                            <section onClick={Toast}></section> */}
                        </div>
                    </section>
                </div>
            </div>
            <div className="profileBody">
                <div className="leftSection">
                    {/* <ProfileIntro />
                    <ProfileFriends /> */}
                    <ProfilePhotos />
                </div>
                <div className="rightSection">
                    <CreatePost />
                    <Posts />
                </div>
            </div>
            {/* {showDiv ? (
                <div className="epDiv" > 
                    <EditProfile />
                </div>
            ) : null} */}
        </div>
    )
}

export default Profile
