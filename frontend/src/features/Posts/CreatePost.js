import React, {useState} from 'react'
import './CreatePost.css'
import Avatar from '@material-ui/core/Avatar'
import tagIcon from '../Web Icons/tagIcon.png'
import feelingIcon from '../Web Icons/feelingIcon.png'
import imageIcon from '../Web Icons/imageIcon.png'
import PostBuilder from './PostBuilder'


const CreatePost = ({userName}) => {
    const [inputPlaceholder, setInputPlaceholder] = useState(`What's on your mind, ${userName}`);
    const [body, setBody] = useState("");
    const [showDiv, setShowDiv] = useState(false);
    

    const handleInputClick = (e) => {
        e.preventDefault();
        setShowDiv(true)
    }
    
    return (
        <div className="createPostDiv">
            <section className="inputSection">
                <Avatar alt="John Doe" src="" className="avatar" >J</Avatar>
                <input type="text" placeholder={inputPlaceholder} onClick={handleInputClick}/>
            </section>
            <section className="postFeatures">
                <section>
                    <img id="postIcon" alt="" src={imageIcon} />
                    <p>Photo/Video</p>
                </section>
                <section>
                    <img id="postIcon" alt="" src={tagIcon} />
                    <p>Tag Friends</p>
                </section>
                <section>
                    <img id="postIcon" alt="" src={feelingIcon} />
                    <p>Feeling/Activity</p>
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