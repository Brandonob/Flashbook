import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
// import '../../css/homeCss.css'
import f_logo from './Nav Icons/flashbookImg.png'
import f_dropdownimgL from './Nav Icons/f_dropdownimgL.png'
import f_gamesimgD from './Nav Icons/f_gamesimgD.png'
import f_gamesimgL from './Nav Icons/f_gamesimgL.png'
import f_groupsimgD from './Nav Icons/f_groupsimgD.png'
import f_groupsimgL from './Nav Icons/f_groupsimgL.png'
import f_homeimgD from './Nav Icons/f_homeimgD.png'
import f_homeimgL from './Nav Icons/f_homeimgL.png'
import f_marketplaceimgD from './Nav Icons/f_marketplaceimgD.png'
import f_marketplaceimgL from './Nav Icons/f_marketplaceimgL.png'
import f_messangerimgL from './Nav Icons/f_messangerimgL.png'
import f_notificationsimg from './Nav Icons/f_notificationsimg.png'
import f_plusimgL from './Nav Icons/f_plusimgL.png'
import f_watchimgD from './Nav Icons/f_watchimgD.png'
import f_watchimgL from './Nav Icons/f_watchimgL.png'




const NavBar = () => {
    const [theme, setTheme] = useState("light")

    const changeTheme = () => {
        if(theme === "light"){
            setTheme("dark")
        } else {
            setTheme("light")
        }

    }
    return (
        <div className="navbar">
            <div className="left">
                <img src={f_logo} alt="" />
                <input type="text" placeholder="Search Facebook"/>
            </div>

            <div className="center">
                <section>
                    <img src={f_homeimgL} alt=""/>
                </section>
                <section>
                    <img src={f_watchimgL} alt=""/>
                </section>
                <section>
                    <img src={f_marketplaceimgL} alt=""/>
                </section>
                <section>
                    <img src={f_groupsimgL} alt=""/>
                </section>
                <section>
                    <img src={f_gamesimgL} alt=""/>
                </section>
                
            </div>

            <div className="right">
                <section>
                    <img src={f_plusimgL} alt=""/>
                </section>
                <section>
                    <img src={f_messangerimgL} alt=""/>
                </section>
                <section>
                    <img src={f_notificationsimg} alt=""/>
                </section>
                <section>
                    <img src={f_dropdownimgL} alt=""/>
                </section>
                {/* <button onClick={changeTheme} >Dark Mode</button> */}
            </div>
        </div>
    )
}

export default NavBar;