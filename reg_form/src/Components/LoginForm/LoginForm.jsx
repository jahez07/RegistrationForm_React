import React from "react";
import './LoginForm.css';
import { MdOutlineMailLock, MdOutlineLocalPhone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";


const LoginForm = () => {
    function Submit(e){
        const formEle = document.querySelector("form")
        e.preventDefault()
        console.log("Submitted")
        const formData = new FormData(formEle)
        fetch("https://script.google.com/macros/s/AKfycbz6CY3pFdG4Hu3TGXIZQ_vpn6ANQSrn5ofsfUasoqe0HwsLqDn4jvGzUa3naUd2V_wJLQ/exec",{
            method: "POST",
            body: formData
        }).then((res)=>res.json()).then((data)=>{
            console.log(data)
            formEle.reset()
        }).catch((error)=>console.log(error))
      }
    return(
        <div className="wrapper">
            <form action="">
                <h1>Admissions Form</h1>
                <div className="form">
                <div className="topic">Student Name</div>
                <div className="input-box">
                    <input type="text" placeholder="Name" name="Name" required />
                    <FaRegUser className="icon" />
                </div>
                <div className="topic">Email Address</div>
                <div className="input-box">
                    <input type="email" placeholder="Email" name="Email" required />
                    <MdOutlineMailLock className="icon"/>
                </div>
                <div className="topic">Phone Number</div>
                <div className="phone-input-box">
                    <input type="text" placeholder="Phone" name="Phone" required />
                    <MdOutlineLocalPhone className="icon"/>
                </div>
                <button onClick={(e)=>Submit(e)} type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;