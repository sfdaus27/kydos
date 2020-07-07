import React from "react";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { StickyContainer, Sticky } from "react-sticky";
import "./About.css";

export class About extends React.Component {
  render() {
    return (
      <div class="aboutContainer">
        <StickyContainer>
          <Sticky disableCompensation>
            {({ style }) => (
              <div style={style}>
                <Navbar />
              </div>
            )}
          </Sticky>
          <div class="aboutContent">
            <div class="backgroundAbout"></div>
          </div>
          <Footer />
        </StickyContainer>
      </div>
    );
  }
}
