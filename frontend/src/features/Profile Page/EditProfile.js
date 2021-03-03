import React, {useState} from 'react'
import { storage } from '../../firebase'
import { selectInfo, fetchUserInfo } from '../Users/usersSlice'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import { CustomToast } from '../Toastify/CustomToast'
import axios from 'axios'

const EditProfile = () => {
    const [pImage, setPImage] = useState("");
    const [pImageURL, setPImageURL] = useState("");
    const [cImage, setCImage] = useState("");
    const [cImageURL, setCImageURL] = useState("");
    const [patchMessage, setPatchMessage] = useState("Profile has been updated!");

    const userInfo = useSelector(selectInfo);
    const dispatch = useDispatch();

    const handlepChange = e => {
        if (e.target.files[0]) {
            setPImage(e.target.files[0])
            const uploadMedia = storage.ref(`images/${pImage.name}`).put(pImage);
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
                        .then(url => {
                            debugger
                            setPImageURL(url)
                        });
                }
            );
            CustomToast("Image selected")
        }
    }
    const handlecChange = e => {
        if (e.target.files[0]) {
            setCImage(e.target.files[0])
            const uploadMedia = storage.ref(`images/${cImage.name}`).put(cImage);
            uploadMedia.on(
                "state_changed",
                snapshot => {},
                error => {
                    console.log(error.message);
                },
                () => {
                    storage
                        .ref("images")
                        .child(cImage.name)
                        .getDownloadURL()
                        .then(url => {
                            debugger
                            setCImageURL(url)
                        });
                }
            );
            CustomToast("Image selected")
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(pImageURL) {
            try {
                await axios.patch(`/users/profile_pic/${userInfo.id}`, {
                    profile_pic: pImageURL
                  });
                  dispatch(fetchUserInfo(userInfo.id))
            } catch (error) {
                console.log(error.message);
            }
        }
        if(cImageURL) {
            try {
                await axios.patch(`/users/profile_pic/${userInfo.id}`, {
                    cover_pic: cImageURL
                  });
                  dispatch(fetchUserInfo(userInfo.id))
            } catch (error) {
                console.log(error.message);
            }
        }
        
        CustomToast(patchMessage)

    }

    return (
        <div className="epContainer">
            <form onSubmit={handleSubmit}>
                <section>
                    <h1>Profile Picture</h1>
                    <input id="profilepic" type="file" onChange={handlepChange} />
                    <label for="profilepic">Edit</label>
                    <Avatar id="" alt="John Doe" src={ pImageURL ? pImageURL : userInfo.profile_pic}>J</Avatar>

                </section>
                <section>
                    <h1>Cover Photo</h1>
                    <input id="coverpic" type="file" onChange={handlecChange} />
                    <label for="coverpic">Edit</label>
                    <img src={ cImageURL ? cImageURL : userInfo.cover_pic}/>
                </section>
                <button type="submit"></button>
            </form>
        </div>
    )
}

export default EditProfile
