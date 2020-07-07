import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export class Navbar extends React.Component {
  render() {
    return (
      <div class="containerNavbar">
        <nav>
          <div class="divLogoNav">
            <Link to="/main">
              <img
                src="https://cdn.discordapp.com/attachments/312173234663718913/729691248776052846/kydoslogo_white.png"
                className="img-responsive"
              />
            </Link>
          </div>
          <ul class="nav-links">
            <li>
              <Link to="/lookbook"> Lookbook </Link>
            </li>
            <li>
              <Link to="/items"> Items </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
          </ul>
          <div class="burger">
            <Menu right>
              <ul class="nav-links">
                <li>
                  <Link to="/lookbook"> Lookbook </Link>
                </li>
                <li>
                  <Link to="/items"> Items </Link>
                </li>
                <li>
                  <Link to="/about"> About </Link>
                </li>
              </ul>
            </Menu>
          </div>
        </nav>
      </div>
    );
  }
}
