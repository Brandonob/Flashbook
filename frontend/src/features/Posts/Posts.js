import React from 'react'
import { useSelector } from 'react-redux'
import { selectPosts } from './postsSlice'
import { selectInfo } from '../Users/usersSlice'
import Avatar from '@material-ui/core/Avatar'
import Likes from './Likes'
import './Post.css'

const Posts = () => {
    const posts = useSelector(selectPosts)
    const info = useSelector(selectInfo)
    // debugger
    
    
    return (
        <div className="postContainer">
            {posts.map((post) => {
                // debugger
                return (
                    <div className="post" key={post.id}>
                        <section className="infoSection">
                            <Avatar id="avatar" alt="John Doe" src={post.profile_pic} >J</Avatar>
                            <h5>{post.first_name}{post.last_name}</h5>
                        </section>
                        <section>
                            <p>{post.body}</p>
                        </section>
                        {post.post_image_url ? (
                            <section className="pMediaSection">
                                <img id="postImage" src={post.post_image_url} alt=""/>
                            </section>
                        ) : null}
                        <section className="pButtonsSection">
                            <Likes id={post.id}/>
                            <section>
                                <h6>Comment</h6>
                            </section>
                            <section>
                                <h6>Share</h6>
                            </section>
                        </section>
                        <img src={post["profile_pic"]} alt=""/>
                        <div className="likes"></div>
                        <div className="comments"></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Posts;