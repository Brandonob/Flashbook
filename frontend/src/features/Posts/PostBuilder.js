import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import xicon from '../NavIcons/xicon.png'
import { fetchUserPosts } from './postsSlice'
import { storage } from '../../firebase'
import { getAPI } from '../Utils/Util'
import { selectID } from '../Users/usersSlice'
import axios from 'axios'

const PostBuilder = ({setShowDiv}) => {
    const [inputText, setInputText] = useState("");
    const [image, setImage] = useState("")
    const [URL, setURL] = useState("");

    const userId = useSelector(selectID);
    const API = getAPI();

    useEffect(() => {

    }, [])

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
                        .then(url => {
                            debugger
                            setURL(url)
                            try {
                                axios.post(`${API}/posts`, {
                                    owner_id: userId,
                                    post_image_url: url,
                                    body: inputText
                                }) 
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
