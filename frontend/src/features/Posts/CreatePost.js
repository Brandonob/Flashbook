import React, {useState} from 'react'
import './CreatePost.css'
import Avatar from '@material-ui/core/Avatar'

const CreatePost = ({userName}) => {
    const [inputPlaceholder, setInputPlaceholder] = useState(`What's on your mind, ${userName}`);
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const postForm = () => {
        return (
            <div>
                 <input />
                 
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