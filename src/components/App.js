import React, { useEffect, useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import {
  Login,
  Logout,
  Register,
  Navbar,
  Posts,
  Profile,
  NewPost,
  SinglePost,
  LoadingPage,
  MessageForm,
  Search
} from "./";

import "./App.css";

const App = () => {
  const [postValue, setPostValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <Title />
      <Routes>
        <Route exact path="/Register" element={<Register />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route
          exact
          path="/Posts"
          element={
            <Posts
              postValue={postValue}
              setPostValue={setPostValue}
              posts={posts}
              setPosts={setPosts}
            />
          }
        ></Route>
        <Route
          exact
          path="/Profile"
          element={<Profile 
            messages={messages} 
            setMessages={setMessages} />}
        ></Route>
        <Route exact path="/NewPost" element={<NewPost />}></Route>
        <Route exact path="/Logout" element={<Logout />}></Route>
        <Route exact path="/MessageForm" element={<MessageForm />}></Route>
        <Route exact path="/Search" element={<Search/>}></Route>

      </Routes>
    </div>
  );
};

export default App;