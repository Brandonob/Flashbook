import React from 'react'
import { Toast } from '../Toastify/Toast'

const ProfilePhotos = ({userURLs}) => {
    // debugger
    return (
        <div className="profilePhotosDiv">
            <section className="photoHeader">
                <h1>Photos</h1>
                <h3 onClick={Toast}>All Photos</h3>
            </section>
            <section className="photoSection">
                {userURLs ? 
                    userURLs.map(url => {
                        return (
                            <img id="photoSectionImg" src={url} alt="" />
                        )
                    }) : <h1 id="photoMessage">No Photos Added!</h1>
                }
            </section>
        </div>
    )
}

export default ProfilePhotos
