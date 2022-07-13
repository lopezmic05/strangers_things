import React, { useState, useEffect } from "react";
import { connectProfile, getUser } from "../api";
import { MessageForm } from "./";

import { Link } from "react-router-dom";

export default function Profile() {
  let token = "";
  const [myInfo, setMyInfo] = useState({});
  useEffect(() => {
    token = localStorage.getItem("token");
    async function getMyInfo() {
      const response = await connectProfile(token);
      setMyInfo(response);
    }
    getMyInfo();
  }, []);
  const myInfoMapping =
    myInfo.data && myInfo.data.messages && myInfo.data.messages.length ? (
      myInfo.data.messages.map((element, index) => {
        return (
          <div key={`Profile${index}`}>
            <div id='inboxMessage'>
              <h3>Title of Post: {element.post.title}</h3>
              <h4>From: {element.fromUser.username}</h4>
              <h4>Message: {element.content}</h4>
              <MessageForm />
            </div>
          </div>
        );
      })
    ) : (
      <h2>No messages to display</h2>
    );

  return (
    <div className='box'>
      {myInfo.data ? (
        <h1> Welcome {myInfo.data.username} </h1>
      ) : (
        <h1>Please Login</h1>
      )}

      <div id='messageBox'>
        <h2>Messages:</h2>

        {myInfoMapping}
      </div>
      <Link to='/NewPost'>
        <button id='newPost'>Create New Post</button>
      </Link>
      <Link to='/Posts'>
        <button id='singlePost'>View All Posts</button>
      </Link>

      <Link to='/Logout'>
        {" "}
        <button
          id='logOut'
          onClick={() => {
            localStorage.removeItem("token");
          }}
        >
          Log Out
        </button>{" "}
      </Link>
    </div>
  );
}
