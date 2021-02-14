import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import ProfileIntro from './ProfileIntro'
import ProfileFriends from './ProfileFriends'
import ProfilePhotos from './ProfilePhotos'
import CreatePost from '../Posts/CreatePost'
import './Profile.css'

const Profile = () => {
    return (
        <div >
            <div className="profileHeader">
                <div className="imageDiv"></div>
                <div className="avatarDiv">
                    <div >
                        <Avatar id="pAvatar" alt="John Doe" src="">J</Avatar>
                    </div>
                    <div>
                        <h1>Fname Lname</h1>
                    </div>
                    <section className="profileOptions">
                        <div>
                            <section>
                                <h1>Posts</h1>
                            </section>
                            <section>
                                <h1>About</h1>
                            </section>
                            <section>
                                <h1>Friends</h1>
                            </section>
                            <section>
                                <h1>Photos</h1>
                            </section>
                            <section>
                                <h1>More</h1>
                            </section>
                        </div>
                        <div>
                            <section>
                                <h5>Edit Profile</h5>
                            </section>
                            <section></section>
                            <section></section>
                            <section></section>
                        </div>
                    </section>
                </div>
            </div>
            <div className="profileBody">
                <div className="leftSection">
                    <ProfileIntro />
                    <ProfileFriends />
                    <ProfilePhotos />
                </div>
                <div className="rightSection">
                    <CreatePost />
                </div>
            </div>
        </div>
    )
}

export default Profile
