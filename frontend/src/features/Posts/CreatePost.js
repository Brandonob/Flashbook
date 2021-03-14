import React, {useState} from 'react'
import './CreatePost.css'
import Avatar from '@material-ui/core/Avatar'
import tagIcon from '../Web Icons/tagIcon.png'
import feelingIcon from '../Web Icons/feelingIcon.png'
import imageIcon from '../Web Icons/imageIcon.png'
import PostBuilder from './PostBuilder'
import { useSelector } from 'react-redux'
import { selectInfo } from '../Users/usersSlice'
import { Toast } from '../Toastify/Toast'


const CreatePost = () => {
    const userInfo = useSelector(selectInfo);

    const [inputPlaceholder, setInputPlaceholder] = useState(`What's on your mind, ${userInfo.first_name}`);
    const [body, setBody] = useState("");
    const [showDiv, setShowDiv] = useState(false);
    

    const handleInputClick = (e) => {
        e.preventDefault();
        setShowDiv(true)
    }
    
    return (
        <div className="createPostDiv">
            <section className="inputSection">
                <Avatar alt="John Doe" src={userInfo.profile_pic} className="avatar" >J</Avatar>
                <input type="text" placeholder={inputPlaceholder} onClick={handleInputClick}/>
            </section>
            <section className="postFeatures">
                <section onClick={Toast}>
                    <img id="postIcon" alt="" src={imageIcon} />
                    <h5>Photo/Video</h5>
                </section>
                <section onClick={Toast}>
                    <img id="postIcon" alt="" src={tagIcon} />
                    <h5>Tag Friends</h5>
                </section>
                <section onClick={Toast}>
                    <img id="postIcon" alt="" src={feelingIcon} />
                    <h5>Feeling/Activity</h5>
                </section>
            </section>
            {showDiv ? (
                <div className="pBuilderDiv" > 
                    <PostBuilder setShowDiv={setShowDiv}/>
                </div>
            ) : null}
                
            
        </div>
    )
}

export default CreatePost;