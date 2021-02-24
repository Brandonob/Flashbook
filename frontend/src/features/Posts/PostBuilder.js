import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import xicon from '../NavIcons/xicon.png'
import { fetchUserPosts, recieveSinglePost } from './postsSlice'
import { storage } from '../../firebase'
import { getAPI } from '../Utils/Util'
import { selectID, selectInfo } from '../Users/usersSlice'
import axios from 'axios'

const PostBuilder = ({setShowDiv}) => {
    const [inputText, setInputText] = useState("");
    const [image, setImage] = useState("")
    const [URL, setURL] = useState("");

    const userInfo = useSelector(selectInfo);
    const userId = useSelector(selectID);
    const dispatch = useDispatch();
    const API = getAPI();

    useEffect(() => {

    }, [])

    const handleNewPost = (post) => {
        let completePost = {
            ...post,
            first_name: userInfo.first_name,
            last_name: userInfo.last_name,
            profile_pic: userInfo.profile_pic
        };

        dispatch(recieveSinglePost(completePost))
    }

    

    const handleUpload = async e => {
        e.preventDefault();

        if(image) {
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
                            debugger
                            setURL(url)
                            try {
                                let res = await axios.post(`${API}/posts`, {
                                    owner_id: userId,
                                    post_image_url: url,
                                    body: inputText
                                })
                                let newPost = res.data.body.single_post
                                handleNewPost(newPost)
                                console.log(newPost); 
                            } catch (error) {
                                console.log(error.message);
                            }
                             
                        });
                }
            );
        } else {
            try {
                debugger
                await axios.post(`${API}/posts`, {
                    owner_id: userId,
                    post_image_url: "",
                    body: inputText
                })
            } catch (error) {
                console.log(error.message);
            }
        }


    }
    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }
    const iconClick = (e) => {
        e.preventDefault()
        setShowDiv(false)
    }

    return (
        <div className="builderContainer">
            <section className="builderHeader">
                <h2>Create Post</h2>
                <section onClick={iconClick}>
                    <img src={xicon} alt="" />
                </section>
            </section>
            <section>
                <Avatar id="avatar" alt="John Doe" src="">J</Avatar>

            </section>
            <form onSubmit={handleUpload}>
                <input type="text" value={inputText} placeholder="What's on your mind?" onChange={(e)=> setInputText(e.target.value)}/>
                <section>
                    <input type="file" onChange={handleChange}/>
                </section>
                <section>
                    <button type="submit" >Post</button>
                </section>
            </form>
            
        </div>
    )
}

export default PostBuilder;
