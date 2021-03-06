const db = require('../db/index')

const getLikesForSinglePost = async (req, res, next) => {
    try {
      res.status(200).json({
        status: "Success",
        message: "get All likes from post_id",
        body: {
          searchPostID: req.params.post_id,
          result: await db.any(
            "SELECT * FROM posts JOIN LIKES ON posts.id = likes.post_id WHERE posts.id = $1",
            req.params.post_id
          )
        }
      });
    } catch (error) {
      res.json({
        error: error
      });
    }
  };
  
  const addLike = async (req, res, next) => {
    try {
      res.status(200).json({
        status: "Success",
        message: "add a like to post_id by liker_id",
        body: {
          liker_id: req.params.liker_id,
          post_id: req.params.post_id,
          result: await db.one(
            "INSERT INTO likes (liker_id, post_id) VALUES($1, $2) RETURNING *",
            [req.params.liker_id, req.params.post_id]
          )
        }
      });
    } catch (error) {
      res.json({
        error: error
      });
    }
  };
  
  const deleteLike = async (req, res, next) => {
    try {
      res.status(200).json({
        status: "Success",
        message: "delete a like to post_id by liker_id",
        body: {
          liker_id: req.params.liker_id,
          post_id: req.params.post_id,
          result: await db.one(
            "DELETE FROM likes WHERE (liker_ID = $1 AND post_id = $2) RETURNING *",
            [req.params.liker_id, req.params.post_id]
          )
        }
      });
    } catch (error) {
      res.json({
        error: error
      });
    }
  };
  
  module.exports = { getLikesForSinglePost, addLike, deleteLike };