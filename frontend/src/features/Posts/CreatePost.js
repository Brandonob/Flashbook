import React, {useState} from 'react'

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
        <div>
            <form onSubmit={handleSubmit}>
                <input type={"text"} value={body} placeholder={inputPlaceholder} onChange={(e) => setBody(e.target.value) }/>
                <button type={"submit"}>Post</button>
            </form>
        </div>
    )
}

export default CreatePost;