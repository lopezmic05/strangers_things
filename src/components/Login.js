
import React from "react"

const Login = () => {
    return (
        <div className="login">
            <h1> Login into your account!</h1>
            <form>
        <label>UserName</label>
        <input id="username" placeholder="Enter Username"></input>
        <label>PassWord</label>
        <input id="password" placeholder="Enter PassWord"></input>
        <button type="submit">Login!</button>
        <button type="submit">Don't have an account? Create one here.</button>

    </form>
            
        </div>
    )
}

export default Login