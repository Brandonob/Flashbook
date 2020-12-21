const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const usersRouter = require('./routes/users/users')
const postsRouter = require('./routes/posts/posts')
const likesRouter = require('./routes/likes/likes')
const commentsRouter = require('./routes/comments/comments')

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/users", usersRouter)
app.use("/posts", postsRouter)
app.use("/likes", likesRouter)
app.use("/comments", commentsRouter)

app.use((err, req, res, next) => {
    console.log(err);

    if(err.status) {
        res.status(err.status).json(err);
    } else {
        res.status(500).json(err);
    }
})

app.listen(PORT, () => console.log("listening"));