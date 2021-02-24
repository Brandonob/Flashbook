const likes = require('express').Router();

const {
    getLikesForSinglePost,
    addLike,
    deleteLike
  } = require("../../queries/likesQ");
  
  likes.get("/post/:post_id", getLikesForSinglePost);
  likes.post("/post/:post_id/:liker_id", addLike);
  likes.delete("/:post_id/:liker_id", deleteLike);

module.exports = likes;