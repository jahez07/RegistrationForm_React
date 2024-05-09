import React from "react";
import './LoginForm.css';
import { MdOutlineMailLock, MdOutlineLocalPhone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";


const LoginForm = () => {
    return(
        <div className="wrapper">
            <form action="">
                <h1>Admissions Form</h1>
                <div className="topic">Student Name</div>
                <div className="input-box">
                    <input type="text" placeholder="Name" required />
                    <FaRegUser className="icon" />
                </div>
                <div className="topic">Email Address</div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required />
                    <MdOutlineMailLock className="icon"/>
                </div>
                <div className="topic">Phone Number</div>
                <div className="phone-input-box">
                    <input type="text" placeholder="Phone" required />
                    <MdOutlineLocalPhone className="icon"/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default LoginForm;