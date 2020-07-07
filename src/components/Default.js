import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import "./Default.css";

export class Default extends React.Component {
  render() {
    return (
      <div class="defContainer">
        <Navbar />
        <div class="defBody">
          <h1>Page not found</h1>
        </div>
        <Footer />
      </div>
    );
  }
}
