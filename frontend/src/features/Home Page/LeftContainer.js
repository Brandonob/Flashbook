import React from 'react'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import f_events from '../Web Icons/f_events.png'
import f_groupsBlogo from '../Web Icons/f_groupsBlogo.png'
import f_marketplaceBlogo from '../Web Icons/f_marketplaceBlogo.png'
import f_pages from '../Web Icons/f_pages.png'
// import f_watchBlogo from '../Web Icons/f_watchBlogo.png'
import friendsLogo from '../Web Icons/friendsLogo.png'
import Avatar from '@material-ui/core/Avatar'
import { getAPI } from '../Utils/Util'
import './Home.css'




const LeftContainer = () => {
    // const state = useSelector()
    const API = getAPI();
    return (
        <div className="leftHud">
            <Link to="/profile" >
                <section id="option">
                        <Avatar alt="John Doe" src="" className="avatar" >J</Avatar>
                        <h5>John Doe</h5>
                </section>
            </Link>
            <section id="option">
                <img src={friendsLogo} alt=""></img>
                <h5>Friends</h5>
            </section>
            <section id="option">
                <img src={f_groupsBlogo} alt=""></img>
                <h5>Groups</h5>
            </section>
            <section id="option">
                <img src={f_marketplaceBlogo} alt=""></img>
                <h5>Marketplace</h5>
            </section>
            <section id="option">
                <img src={f_events} alt=""></img>
                <h5>Events</h5>
            </section>
            <section id="option">
                <img src={f_pages} alt=""></img>
                <h5>Pages</h5>
            </section>
        </div>
    )
}

export default LeftContainer;