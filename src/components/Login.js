import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {loginUser} from '../api';
import { Link } from 'react-router-dom';

import "./Login.css"

export default function LoggedIn (){
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleOnChange = (event) =>{
        const changed = event.target.id
        if(changed === 'username'){
            console.log(username, 'this is username')
            setUsername(event.target.value)
        }
        else if(changed === 'password'){
            console.log(password, 'this is password')

            setPassword(event.target.value)
        }
    }
    const handleSubmit = async(event) => {
        event.preventDefault()
        console.log(username, password, "this is username and password")
        const token = await loginUser(username, password)
        localStorage.setItem("token", token)
        console.log(token)
        navigate("/Profile")
    }
    console.log(username)
    return(<>
    <form id = "loginPage" onSubmit ={handleSubmit}>
        <h1>Login</h1>
        <label> Username: </label>
        <input id ="username"
        placeholder = "Enter Username Here" 
        value = {username} onChange ={handleOnChange} 
        minLength = "6">
        </input>
        <label> Password: </label>
        <input id ="password" 
        placeholder ="Enter Password Here" 
        minLength = "6" 
        onChange ={handleOnChange}>
        </input>
        <button id = "loginButton" type = "submit">Login</button>
        <Link to = "/Posts"> <button id = "loginButton">View As Guest</button></Link>
    </form>
    </>)
}