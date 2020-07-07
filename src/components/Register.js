import React from "react";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

export class Register extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <form class="register-form">
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
          <input type="text" placeholder="email address" />
          <button>create</button>
          <p class="message">
            Already registered? <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    );
  }
}
