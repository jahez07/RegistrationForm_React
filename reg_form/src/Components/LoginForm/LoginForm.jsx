import React from "react";
import './LoginForm.css';
import { MdOutlineMailLock } from "react-icons/md";

const LoginForm = () => {
    return(
        <div className="wrapper">
            <form action="">
                <h1>Admissions Form</h1>
                <div className="input-box">
                    <input type="text" placeholder="Name" required />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Phone" required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default LoginForm;