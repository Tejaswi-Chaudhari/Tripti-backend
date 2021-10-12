import React, { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import "./login.css"

const Login = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("https://triptiii.herokuapp.com/Login", user)
            .then(res => {
                alert(res.data.message)
                const token = res.data.token;
                sessionStorage.setItem('token', token)
                console.log(token)
                window.location.reload(history.push("/"))
            }
            )
    }

    return (


        <div className="login">
            <div className="container1">

                {console.log(user)}
                <h1 className="heading">Login</h1>
                <div className="input-ele">
                    <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                    <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
                </div>
                <div className="button" onClick={login}>Login</div>

                <div className="button" onClick={() => history.push("/Register")}>Register</div>
            </div>
            <div className="container2">
                <h1 className="heading2">Tripti</h1>
            </div>
        </div >

    )
}


export default Login
