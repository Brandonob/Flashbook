import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPosts, selectSingleUPosts } from './postsSlice'
import { selectInfo } from '../Users/usersSlice'
import Avatar from '@material-ui/core/Avatar'
import Likes from './Likes'
import './Post.css'

const Posts = () => {
    // const [likes, setLikes] = useState([]);

    const posts = useSelector(selectPosts)
    const userPosts = useSelector(selectSingleUPosts)
    const info = useSelector(selectInfo)

    let location = useLocation();
    
    const postsView = () => {
        if (location.pathname === "/profile") {
          return true;
        } else {
          return false;
        }
      }

    return (
        <div className="postContainer">
            { postsView() ? 
                userPosts.map((post) => {
                    return (
                        <div className="post" key={post.id}>
                            <section className="infoSection">
                                <Avatar id="postsAvatar" alt="John Doe" src={post.profile_pic} >J</Avatar>
                                <h5 id="name" >{post.first_name} {post.last_name}</h5>
                                <h5>{post.timestamp}</h5>
                            </section>
                            <section className="bodySection">
                                <p>{post.body}</p>
                            </section>
                            {post.post_image_url ? (
                                <section className="pMediaSection">
                                    <img id="postImage" src={post.post_image_url} alt=""/>
                                </section>
                            ) : null}
                            <section className="pButtonsSection">
                                <Likes id={post.id} />
                                <section>
                                    <h6>Comment</h6>
                                </section>
                                <section>
                                    <h6>Share</h6>
                                </section>
                            </section>
                            <div className="likes"></div>
                            <div className="comments"></div>
                        </div>
                    )
                })
            :
            posts.map((post) => {
                return (
                    <div className="post" key={post.id}>
                        <section className="infoSection">
                            <Avatar id="postsAvatar" alt="John Doe" src={post.profile_pic} >J</Avatar>
                            <h5 id="name" >{post.first_name} {post.last_name}</h5>
                            <h5>{post.timestamp}</h5>
                        </section>
                        <section className="bodySection">
                            <p>{post.body}</p>
                        </section>
                        {post.post_image_url ? (
                            <section className="pMediaSection">
                                <img id="postImage" src={post.post_image_url} alt=""/>
                            </section>
                        ) : null}
                        <section className="pButtonsSection">
                            <Likes id={post.id} />
                            <section>
                                <h6>Comment</h6>
                            </section>
                            <section>
                                <h6>Share</h6>
                            </section>
                        </section>
                        <div className="likes"></div>
                        <div className="comments"></div>
                    </div>
                )
            })
            }
            
        </div>
    )
}

export default Posts;