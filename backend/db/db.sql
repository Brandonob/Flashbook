-- DROP DATABASE IF EXISTS flashbook_db;
-- CREATE DATABASE flashbook_db;

-- \c flashbook_db;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS likes CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
-- Bonus: DROP TABLE IF EXISTS groups;

CREATE TABLE users
(
    id VARCHAR PRIMARY KEY,
    password VARCHAR NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email_address VARCHAR NOT NULL,
    profile_pic VARCHAR DEFAULT ' ',
    cover_pic VARCHAR DEFAULT ' ',
    dob VARCHAR DEFAULT ' ',
    gender TEXT NOT NULL,
    bio VARCHAR DEFAULT ' '
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    owner_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    post_image_url VARCHAR DEFAULT ' ',
    body VARCHAR,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE likes
(
    id SERIAL PRIMARY KEY,
    liker_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    CONSTRAINT UC_like UNIQUE (liker_id,post_id)
);

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    owner_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    content VARCHAR
);

INSERT INTO users
    (id, password, first_name, last_name, email_address, gender)
VALUES
    ('QyebSQDAL8MsUSpz9QbjmgxLXOd2', 'secret', 'Brandon', 'Brown', 'brandonob@gmail.com', 'male');

-- INSERT INTO posts
--     (owner_id, post_image_url, body)
-- VALUES
--     ('QyebSQDAL8MsUSpz9QbjmgxLXOd2', 'backend/images/Flashbookcopy.png', 'Hi, how is everyone doing today?'),
--     ('QyebSQDAL8MsUSpz9QbjmgxLXOd2', 'backend/images/cream.png', 'was everyones day delightful today?'),
--     ('QyebSQDAL8MsUSpz9QbjmgxLXOd2', 'backend/images/Flashbookcopy.png', 'Hey there'),
--     ('QyebSQDAL8MsUSpz9QbjmgxLXOd2', 'backend/images/cream.png', 'Im so bored today');

-- INSERT INTO likes
--     (liker_id, post_id)
-- VALUES
--     ('QyebSQDAL8MsUSpz9QbjmgxLXOd2', 1)