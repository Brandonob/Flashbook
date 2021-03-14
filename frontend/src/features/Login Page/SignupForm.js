import React, { useState } from 'react';
import axios from 'axios'
import { signUp } from '../Utils/firebaseFunctions'
import { getAPI } from '../Utils/Util'
import { addUser } from '../Users/usersSlice'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import xicon from '../NavIcons/xicon.png'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import defaultAvatar from '../Web Icons/defaultAvatar.jpg'


const SignupForm = ({setShowDiv}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [gender, setGender] = useState("")
    const [startDate, setStartDate] = useState(new Date());

    const API = getAPI();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            // console.log(gender);
            // debugger
            let res = await signUp(email, password)

            await axios.post(`${API}/users/addUser`, {
                id: res.user.uid,
                password: password,
                first_name: firstName,
                last_name: lastName,
                email_address: email,
                profile_pic: "",
                cover_pic: "",
                dob: startDate,
                gender: gender
              });
              
              setErrMessage("Thank you for signing up. Redirecting!");
              dispatch(addUser(res.user.uid));
              history.push("/home");
        } catch (error) {
            setErrMessage(error.message)
        }
    }
    const iconClick = (e) => {
        e.preventDefault()
        setShowDiv(false)
    }
    return (
        <div className="signupContainer">
            <div className="signupHeader">
                <section>
                    <h2>Sign Up</h2>
                    <p>It's quick and easy.</p>
                </section>
                <section onClick={iconClick} >
                    <img id="xicon" alt="" src={xicon}/>
                </section>
            </div>

            <form className="signupForm" onSubmit={handleSubmit}>
                <input id="nameInput" value={firstName} type="text" placeholder="First name" onChange={(e)=> setFirstName(e.target.value)} />
                <input id="nameInput" value={lastName} type="text" placeholder="Last name" onChange={(e)=> setLastName(e.target.value)} />
                <input id="epwInput" value={email} type="text" placeholder="Mobile number or email" onChange={(e)=> setEmail(e.target.value)}/>
                <input id="epwInput" value={password} type="password" placeholder="New password" onChange={(e)=> setPassword(e.target.value)}/>
                <section id="formSection">
                    <h5>Birthday</h5>
                    {/* <select id="bdayOptions"> */}
                    <section className="dpSection">
                        <DatePicker
                            className="datePicker"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="MMMM"
                            showMonthYearPicker
                        />

                        <DatePicker
                            className="datePicker"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="dd"
                            dropdownMode="select"
                        />

                        <DatePicker
                            className="datePicker"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="yyyy"
                            showYearPicker
                        />
                    </section> 

                    <h5 id="genderTitle">Gender</h5>
                    <section className="genderContainer" >
                        <section className="genderBorder" >
                            <label htmlFor="female">Female</label>
                            <input type="radio" name="gender" id="female" value="female" onChange={(e)=> setGender(e.target.value)}/>
                        </section>
                        <section className="genderBorder" >
                            <label htmlFor="male">Male</label>
                            <input type="radio" name="gender" id="male" value="male" onChange={(e)=> setGender(e.target.value)}/>
                        </section>
                        <section className="genderBorder" >
                            <label htmlFor="custom">Other</label>
                            <input type="radio" name="gender" id="other" value="other" onChange={(e)=> setGender(e.target.value)}/>
                        </section>
                    </section>
                    
                </section>
                    <button className="signupButton2">Sign Up</button>
            </form>

            
            {errMessage}
        </div>
    )
}

export default SignupForm
