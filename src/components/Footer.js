import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export class Footer extends React.Component {
  render() {
    return (
      <div class="divFooter">
        <div class="divCopyright">
          <p>Copyright © 2020 kydos</p>
        </div>
        <ul class="footer-links">
          <li>
            <Link to="/terms"> Terms and Conditions </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
        </ul>
      </div>
    );
  }
}
