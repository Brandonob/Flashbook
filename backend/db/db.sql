DROP DATABASE IF EXISTS facebook_db;
CREATE DATABASE facebook_db;

\c facebook_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS comments;
-- Bonus: DROP TABLE IF EXISTS groups;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    password VARCHAR,
    first_name VARCHAR,
    last_name VARCHAR,
    email_address VARCHAR,
    profile_pic VARCHAR,
    bio VARCHAR
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    owner_id INT REFERENCES users(id) ON DELETE CASCADE,
    body VARCHAR,
    post_image_url VARCHAR
);

CREATE TABLE likes
(
    id SERIAL PRIMARY KEY,
    liker_id INT REFERENCES users(id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    owner_id INT REFERENCES users(id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    content VARCHAR
);

-- INSERT INTO users
--     (password, first_name, last_name, email_address, profile_pic, bio)
-- VALUES
--     ('secret', 'Brandon', 'Brown', 'bb@pursuit.org', 'uploads/saltflats.JPG', 'Hi Welcome to my page');

-- INSERT INTO posts
--     (owner_id, post_image_url, body)
-- VALUES
--     ('1', 'backend/images/earthsports2.png', 'Hi, how is everyone doing today?'),
--     ('1', 'backend/images/earthsports2.png', 'was everyones day delightful today?'),
--     ('1', 'backend/images/earthsports2.png', 'Hey there'),
--     ('1', 'backend/images/earthsports2.png', 'Im so bored today');