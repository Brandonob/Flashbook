# Flashbook

**Flashbook** is a Full Stack Web App that is a remake of Facebook. Here users are able to sign up to our community, share their thoughts, and interact with other users and posts.

Built with React.js, Node.js with Express, and PostgreSQL.

![Flashbook Login](./ReadMeImgs/Flashbookss.png)


## Features

Users are able to:

* Create or log-in to their own personalized account
* Search for and add any user on this platform as a friend
* Share their feelings by creating a post for their news feed
* Interact with their friends posts by sharing or leaving a reaction

## Future Implementations

Users will be able to: 

* Customize their profile by having the option for dark mode
* Connect with other users through direct messanging
* Create a story that will be shared for 24 hours

## Technologies Used

* Node.js & Express.js
* Firebase
* PostgreSQL
* pg-promise
* CSS3
* React
* Redux Toolkit

## Local Setup

1. Clone this repo:

    git clone https://github.com/Brandonob/Flashbook.git && cd Flashbook

2. Install dependencies for the Node/Express Server (`backend` folder):

    cd backend && npm install
    
3. Install dependencies the React App (`frontend` folder):

    cd frontend && npm install

4. Create database:

    cd backend && cd db
    psql -f db.sql
    
5. To launch the React App, inside the `frontend` folder, and view the web application:

    cd frontend && npm start
  

