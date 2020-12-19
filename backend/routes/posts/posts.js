const posts = require('express').Router();

const {
    getAllPosts,
    getAllPostsBySingleUser,
    deletePost,
    updatePost,
    createPost,
    getPost
} = require('../../queries/postsQ')

posts.get("/", getAllPosts);
posts.get("/ownerID/:owner_id", getAllPostsBySingleUser);
posts.get("/:id", getPost);
posts.post("/", createPost);
posts.patch("/:id", updatePost);
posts.delete("/:id", deletePost);

module.exports = posts;