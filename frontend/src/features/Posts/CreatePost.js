import React, {useState} from 'react'
import './CreatePost.css'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    avatar: {
      marginRight: "20px",
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
                <Avatar alt="John Doe" src="">J</Avatar>
                <input type="text" placeholder={inputPlaceholder} />
            </section>
            <section>

            </section>
                
            
        </div>
    )
}

export default CreatePost;