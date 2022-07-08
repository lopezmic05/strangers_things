import React from "react"
import { registerPerson } from "../api"


async function handleSubmit(event){
    event.preventDefault()
    console.log("this is the event", event)
    registerPerson(event)
}
const App = () => {
    return(<div>
    <h1>Stangers Things</h1>
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
