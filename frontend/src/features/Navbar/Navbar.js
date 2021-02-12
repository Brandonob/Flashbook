import React, { useState } from 'react';
import f_logo from '../NavIcons/flashbookImg.png'
import f_dropdownimgL from '../NavIcons/f_dropdownimgL.png'
import f_gamesimgD from '../NavIcons/f_gamesimgD.png'
import f_gamesimgL from '../NavIcons/f_gamesimgL.png'
import f_groupsimgD from '../NavIcons/f_groupsimgD.png'
import f_groupsimgL from '../NavIcons/f_groupsimgL.png'
import f_homeimgD from '../NavIcons/f_homeimgD.png'
import f_homeimgL from '../NavIcons/f_homeimgL.png'
import f_marketplaceimgD from '../NavIcons/f_marketplaceimgD.png'
import f_marketplaceimgL from '../NavIcons/f_marketplaceimgL.png'
import f_messangerimgL from '../NavIcons/f_messangerimgL.png'
import f_notificationsimg from '../NavIcons/f_notificationsimg.png'
import f_plusimgL from '../NavIcons/f_plusimgL.png'
import f_watchimgD from '../NavIcons/f_watchimgD.png'
import f_watchimgL from '../NavIcons/f_watchimgL.png'
import { getAPI } from '../Utils/Util'
import './Navbar.css'
import Avatar from '@material-ui/core/Avatar'




const NavBar = () => {
    const [theme, setTheme] = useState("light")
    const API = getAPI();

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
                <a href={`${API}/home`}>
                    <img id="flogo" src={f_logo} alt="" />
                </a>
                <input id="searchBar" type="text" src="" placeholder="Search Facebook"/>
            </div>

            <div className="center">
                <section>
                    <a href={`${API}/home`}>
                        <img src={f_homeimgL} alt=""/>
                    </a>
                </section>
                <section>
                    <a>
                        <img src={f_watchimgL} alt=""/>
                    </a>
                </section>
                <section>
                    <a>
                        <img src={f_marketplaceimgL} alt=""/>
                    </a>
                </section>
                <section>
                    <a>
                        <img src={f_groupsimgL} alt=""/>
                    </a>
                </section>
                <section>
                    <a>
                        <img src={f_gamesimgL} alt=""/>
                    </a>
                </section>
                
            </div>

            <div className="right">
                <section className="userSection">
                    <Avatar id="avatar" alt="John Doe" src="">J</Avatar>
                    <p>John Doe</p>
                </section>
                <section className="circleDiv" >
                    <img src={f_plusimgL} alt="" style={{height: "60px"}}/>
                </section>
                <section className="circleDiv" >
                    <img src={f_messangerimgL} alt="" style={{height: "30px"}}/>
                </section>
                <section className="circleDiv" >
                    <img src={f_notificationsimg} alt="" style={{height: "40px"}}/>
                </section>
                <section className="circleDiv" >
                    <img src={f_dropdownimgL} alt="" style={{height: "50px", margin: "1px"}}/>
                </section>
                {/* <button onClick={changeTheme} >Dark Mode</button> */}
            </div>
        </div>
    )
}

export default NavBar;