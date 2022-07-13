import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addPosts } from "../api";

export default function NewPost() {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const authToken = localStorage.getItem("token") ? true : false;

  async function handleSubmit(event) {
    event.preventDefault();

    const postDetail = {
      title: title,
      description: description,
      location: location,
      price: price,
      willDeliver: willDeliver,
    };

    const token = localStorage.getItem("token");
    console.log(token);
    const response = await addPosts(postDetail, token);
    navigate("/Posts");
    return response;
  }
  return (
    <div>
      {authToken === true ? (
        <>
          <h1>Create a New Post</h1>
          <form onSubmit={handleSubmit}>
            <input
              id='new-post-input'
              type='text'
              onChange={(event) => setTitle(event.target.value)}
              placeholder='Title...'
            ></input>
            <input
              id='new-post-input'
              type='text'
              onChange={(event) => setDescription(event.target.value)}
              placeholder='Description...'
            ></input>
            <input
              id='new-post-input'
              type='text'
              onChange={(event) => setLocation(event.target.value)}
              placeholder='Location...'
            ></input>
            <input
              id='new-post-input'
              type='text'
              onChange={(event) => setPrice(event.target.value)}
              placeholder='Price...'
            ></input>
            <button type='Submit' id='new-submit'>
              Submit New Post
            </button>
          </form>
        </>
      ) : (
        <h2>Please Login Before Attempting To Post</h2>
      )}
    </div>
  );
}
