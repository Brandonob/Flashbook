const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
// require('dotenv').config()

const app = express();
// const PORT = process.env.PORT;
const PORT = 3001;

const usersRouter = require('./routes/users/users')
const postsRouter = require('./routes/posts/posts')
const likesRouter = require('./routes/likes/likes')
const commentsRouter = require('./routes/comments/comments')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", usersRouter)
app.use("/posts", postsRouter)
app.use("/likes", likesRouter)
app.use("/comments", commentsRouter)

app.listen(PORT, () => console.log("listening"));