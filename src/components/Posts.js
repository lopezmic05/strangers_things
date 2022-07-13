import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deletePosts, getPosts } from "../api";
import { MessageForm, Search } from ".";

import "./App.css";

const Post = ({ postValue, setPostValue }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const authToken = localStorage.getItem("token") ? true : false;
  const catchId = (id) => {
    setPostValue(id);
    return postValue;
  };
  useEffect(() => {
    getPosts()
      .then((response) => {
        console.log(response, "respnse from Posts");
        const posts = response.data.posts;
        setPosts(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  async function deletePost(post_id) {
    const tokens = localStorage.getItem("token");
    const erase = await deletePosts(tokens, post_id);
    console.log(erase, "this is erase");
    navigate("/Profile");
    return erase;
  }
  const postMapping = posts.map((post, index) => {
    let postId = posts[index]._id;
    return (
      <div key={`Posts${index}`}>
        <div id='TitleBox'>
          <div id='titleContainer'>
            <h1 id='postTitle'>{post.title}</h1>
            <h2 id='additionalPost'>PRICE: {post.price}</h2>
            <h4 id='additionalPost'>TIME POSTED: {post.updatedAt}</h4>
            <h4 id='additionalPost'>POST BY: {post.author.username}</h4>
            <h3 id='additionalPost'>DESCRIPTION: {post.description}</h3>
            <MessageForm postId={postId} deletePost={deletePost} />
            {authToken === true ? (
              <button
                onClick={() => {
                  catchId(post._id), deletePost(post._id);
                }}
                id='deleteButton'
              >
                Delete Post
              </button>
            ) : (
              <Link to='/Login'>
                <button id='null'>Login to View Post</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id='postsMain'>
      <Search postMapping={postMapping} posts={posts} setPosts={setPosts} />
      <h1 id='postWelcome'>
        Check These Posts Out!
        {authToken === true ? (
          <Link to='/Profile'>
            <button id='backButton'> Back to Profile </button>
          </Link>
        ) : null}
      </h1>

      {postMapping}
    </div>
  );
};

export default Post;
