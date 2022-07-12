import React, { useState } from "react";
import {getPosts} from "../api"
import { useNavigat } from "react-router-dom";
import { Link } from 'react-router-dom';


export default function Search({posts, setPosts, getPosts}){

const [searchTerm, setSearchTerm] = useState('');

const postMatches = (post, text) => {
    const review = post.title.includes(text)
    return review
}
const handleSubmit = () =>{
const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
setPosts(filteredPosts)
if(searchTerm.length){
    getPosts();
}}
    return(
        <form id = "searchBar" onSubmit ={(event) => {event.preventDefault(); handleSubmit()}} >
            <div id="TitleBox">
            <div id = "titleContainer">
            <label id="messageForm"> Search in Posts:</label>
            <input 
            type = "text"
            placeholder = "Search"
            id="messageInput"
            value = {searchTerm}    
            onChange ={(event)=> setSearchTerm(event.target.value)}>
            </input>
            <button 
            type = 'submit'
            id="submitButton" >Search</button>
           </div>
           </div>
        </form>
    )
}