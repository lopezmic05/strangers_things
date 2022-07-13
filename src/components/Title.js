import React from "react";
import { Link } from "react-router-dom";

import "./title.css";
export default function Title() {
  return (
    <div id='navBar'>
      <p id='heading'>Welcome to Stranger's Things</p>
      <h2>
        {" "}
        <Link to='/Login'>Login</Link> <Link to='/Register'>Register</Link>
      </h2>
    </div>
  );
}
