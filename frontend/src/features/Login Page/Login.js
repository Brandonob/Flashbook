import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { addUser } from '../users/usersSlice'
import { login } from '../Utils/firebaseFunctions'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("")
    const history = useHistory();
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await login(email, password)
            console.log("you have succesfully logged in");
            // dispatch(addUser(res.user.uid));
            history.push("/home")
            
        } catch (error) {
            setErrMessage(error.message)
        }

    }

    return (
        <div className="loginMain">
            <div className="loginText"> 
                <h1 className="title" >flashbook</h1>
                <h1 className="sub_title" >Connect with friends and the world around you on Flashbook.</h1>
            </div>
            <div className="loginForm">
                <form onSubmit={handleSubmit}>
                    <input id="loginInput" value={email} placeholder="Email or Phone Number" className="loginB" type="text" onChange={(e)=> setEmail(e.target.value)} />
                    <input id="loginInput" value={password} placeholder="Password" className="loginB" type="password" onChange={(e)=> setPassword(e.target.value)} />
                    <button id="loginB" >Log In</button>
                </form>  
                <div className="signupButton">
                    <button className="signupB">Create New Account</button>
                </div>
            </div>
        </div>
    )
}

export default Login