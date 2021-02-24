import React, {useState, useEffect} from 'react'
import axios from 'axios'
import likeIcon from '../Web Icons/likeIcon.png'
import likedIcon from '../Web Icons/likedIcon.png'
import { getAPI } from '../Utils/Util'
import { selectID } from '../Users/usersSlice'
import { useSelector } from 'react-redux'

const Likes = ({id}) => {
    const [likes, setLikes] = useState([]);
    const [likeImage, setLikeImage] = useState(likeIcon);

    const userId = useSelector(selectID);

    const API = getAPI();

    const fetchLikes = async url => {
        try {
            let res = await axios.get(url);
            const { result } = res.data.body;
            setLikes(result);
            handleLikeImage(result)
        } catch (error) {
            console.log(error);
            setLikes([]);
        }
    };

  const handleLike = async e => {
    try {
      if (likeImage === likeIcon) {
        await axios.post(`${API}/likes/post/${id}/${userId}`);
        fetchLikes(`${API}/likes/post/${id}`);
      } else {
        await axios.delete(`${API}/likes/${id}/${userId}`);
        fetchLikes(`${API}/likes/post/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleLikeImage = (likesArray) => {
    let userLikeExists = false;

    likesArray.forEach(el => {
        if(el.owner_id === userId){
            userLikeExists = true;
        }
    })

    if(userLikeExists) {
        setLikeImage(likedIcon)
    } else {
        setLikeImage(likeIcon)
    }

  }

  useEffect(() => {
    fetchLikes(`${API}/likes/post/${id}`);
  }, []);

    return (
        <>
            {likes.length ? (
                <section>
                    <h6>{likes.length}</h6>
                </section>
            ) : null}
            <section onClick={handleLike}>
                <img alt="" src={likeImage} />
                <h6>Like</h6>
            </section>
        </>

        
    )
}

export default Likes
