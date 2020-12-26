import React from 'react'
import { useSelector } from 'react-redux'
import { selectPosts } from './postsSlice'

const Posts = () => {
    const posts = useSelector(selectPosts)
    // debugger
    
    
    return (
        <div>
            {posts.map((post, i) => {
                return (
                    <div className="post">
                        <img src={posts[i]["post_image_url"]} alt=""/>
                        <h1>{posts[i]["first_name"]}{posts[i]["last_name"]}</h1>
                        <img src={posts[i]["profile_pic"]} alt=""/>
                        <p>{posts[i]["body"]}</p>
                        <div className="likes"></div>
                        <div className="comments"></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Posts;