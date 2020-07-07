import React from "react";
import { Navbar } from "./Navbar";
import "./Cart.css";

export class Cart extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>Cart</div>
      </div>
    );
  }
}
