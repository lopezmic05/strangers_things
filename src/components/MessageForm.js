import React from "react";
import { useNavigate } from "react-router-dom";
import { sendMessage } from "../api";

export default function MessageForm(props) {
  const { postId } = props;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = event.target[0].value;
    const token = localStorage.getItem("token");
    sendMessage(token, postId, content);
    navigate("/Profile");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label id='messageForm'>Direct Message: </label>
      <input id='messageInput' type='text' placeholder='Write Message'></input>
      <button id='submitButton'>Submit</button>
    </form>
  );
}
