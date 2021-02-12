import React, {useState} from 'react'
import './CreatePost.css'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from "@material-ui/core/styles";
import tagIcon from '../Web Icons/tagIcon.png'
import feelingIcon from '../Web Icons/feelingIcon.png'
import imageIcon from '../Web Icons/imageIcon.png'

const useStyles = makeStyles({
    avatar: {
    //   marginRight: "20px",
    },
  });

const CreatePost = ({userName}) => {
    const [inputPlaceholder, setInputPlaceholder] = useState(`What's on your mind, ${userName}`);
    const [body, setBody] = useState("");
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const postForm = () => {
        return (
            <div>
                 <section>
                    <h1> Create Post</h1>
                 </section>
                 <section>
                    <Avatar alt="John Doe" src="" className={classes.avatar} >J</Avatar>
                    <p>Name</p>
                 </section>
                 <section>
                    <input /> 
                 </section>
            </div>
        )
    }
    
    return (
        <div className="createPostDiv">
            <section className="inputSection">
                <Avatar alt="John Doe" src="" className="avatar" >J</Avatar>
                <input type="text" placeholder={inputPlaceholder} />
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
                
            
        </div>
    )
}

export default CreatePost;