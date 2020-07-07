import React from "react";
import { Navbar } from "./Navbar";
import "./Login.css";
import { Link } from "react-router-dom";

export class Login extends React.Component {
  render() {
    return (
      <div class="containerLogin">
        <Navbar />
        <div class="bodyLogin">
          {/* <div class="loginBorder">
            <form class="login">
              <div class="emailWrap">
                <input type="text" placeholder="Username" />
              </div>
              <div class="passwordWrap">
                <input type="password" placeholder="Password" />
              </div>
              <button>Login</button>
            </form>
    </div>*/}
          <div class="login-page">
            <div class="form">
              <form class="login-form">
                <input type="text" placeholder="username/email" />
                <input type="password" placeholder="password" />
                <button>login</button>
                <p class="message">
                  Not registered? <Link to="/register">Create an account</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
