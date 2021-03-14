import React, { useEffect, useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import ProfileIntro from './ProfileIntro'
import ProfileFriends from './ProfileFriends'
import ProfilePhotos from './ProfilePhotos'
import CreatePost from '../Posts/CreatePost'
import Posts from '../Posts/Posts'
import firebase from "firebase/app";
import { fetchUserPosts, fetchSingleUserPosts, selectSingleUPosts } from '../Posts/postsSlice'
import { selectID, selectInfo, fetchUserInfo } from '../Users/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Toast } from '../Toastify/Toast'
import { CustomToast } from '../Toastify/CustomToast'
import EditProfile from './EditProfile'
import { storage } from '../../firebase'
import axios from 'axios'
import { getAPI } from '../Utils/Util'
import './Profile.css'
// import { post } from '../../../../backend/routes/users/users'

const Profile = () => {
    // const [showDiv, setShowDiv] = useState(false);
    const [pImage, setPImage] = useState("");
    const [pImageURL, setPImageURL] = useState("");
    const [cImageURL, setCImageURL] = useState("");
    const [userURLs, setUserURLs] = useState([]);

    const userId = useSelector(selectID);
    const userInfo = useSelector(selectInfo);
    const userPosts = useSelector(selectSingleUPosts)

    const API = getAPI();
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log(userId);
        if (userId) {
            dispatch(fetchSingleUserPosts(userId))
            getUserImages(userPosts)
        }
      
    }, [])

    const getUserImages = (posts) => {
        if(posts) {
            let URLs = [];
            posts.forEach(el => {
                if(el.post_image_url) {
                    URLs.push(el.post_image_url)
                }
            })
            setUserURLs(URLs)
        }

    }

    const handlepChange = e => {
        e.preventDefault();
            let image = e.target.files[0];

            if(image) {
                CustomToast("Image selected")
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
                            .child(image.name)
                            .getDownloadURL()
                            .then(async url => {
                                setPImageURL(url)
                                try {
                                    await axios.patch(`${API}/users/profile_pic/${userInfo.id}`, {
                                        profile_pic: url
                                      });
                                      dispatch(fetchUserInfo(userInfo.id))
                                } catch (error) {
                                    console.log(error.message);
                                }
                            });
                    }
                );
            }
        
    }
    const handlecChange = e => {
        e.preventDefault();
            let image = e.target.files[0];

            if(image) {
                CustomToast("Image selected")
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
                            .child(image.name)
                            .getDownloadURL()
                            .then(async url => {
                                setPImageURL(url)
                                try {
                                    await axios.patch(`${API}/users/cover_pic/${userInfo.id}`, {
                                        cover_pic: url
                                      });
                                      dispatch(fetchUserInfo(userInfo.id))
                                } catch (error) {
                                    console.log(error.message);
                                }
                            });
                    }
                );
            }
    }

    // const handleEditClick = (e) => {
    //     e.preventDefault();
    //     setShowDiv(true)
    // }


    return (
        <div >
            <div className="profileHeader">
                <input id="coverpicInput" type="file" onChange={handlecChange} />
                <label for="coverpicInput">
                    <div className="imageDiv" style={{ backgroundImage: `url(${userInfo.cover_pic})` }}></div>
                </label>
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
                    <ProfilePhotos  userURLs={userURLs} />
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
