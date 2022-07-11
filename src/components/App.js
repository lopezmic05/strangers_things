import React from "react"
import { registerPerson } from "../api"
// import Navbar from "./Navbar"


async function handleSubmit(event){
    event.preventDefault()
    console.log("this is the event", event)
    const backFromAPI = await registerPerson(event)
}
const App = () => {
    return(<div>
    {/* <Navbar /> */}
    <h1>Stanger's Things</h1>
    <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input id="username" placeholder="Enter Username"></input>
        <label>PassWord</label>
        <input id="password" placeholder="Enter PassWord"></input>
        <button type="submit">Login!</button>

    </form>
    
    </div>)
}

export default App
