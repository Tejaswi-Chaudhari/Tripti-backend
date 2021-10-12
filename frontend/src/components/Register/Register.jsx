import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios';
import "./register.css";

const Register = () => {
    const history = useHistory()
    //usestate to manage our state within the code
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    //e stands for event
    const handleChange = e => {
        console.log(e.target);
        const { name, value } = e.target
        //to match specific field and add the value to it
        setUser({
            //spread operator
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password } = user
        axios.post("https://triptifoundation.herokuapp.com/Register", user)
            .then(res => {

                alert(res.data.message)
                history.push("/Login")
            })
    }

    return (
        <div className="register">
            <div className="container1">
                {console.log("User", user)}

                <h1 className="heading1">Register</h1>
                <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                <div className="button10">
                    <div className="button" onClick={register} >Register</div>
                    <div className="button" onClick={() => history.push("/Login")}>Login</div>
                </div>
            </div>
            <div className="container2">
                <h1 className="heading2">Tripti</h1>
            </div>

        </div>
    )
}

export default Register
