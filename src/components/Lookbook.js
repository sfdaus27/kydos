import React from "react";
import { Navbar } from "./Navbar";
import { StickyContainer, Sticky } from "react-sticky";
import { Footer } from "./Footer";
import "./Lookbook.css";

export class Lookbook extends React.Component {
  render() {
    return (
      <div class="lbookContainer">
        <StickyContainer>
          <Sticky disableCompensation>
            {({ style }) => (
              <div style={style}>
                <Navbar />
              </div>
            )}
          </Sticky>
          <div class="lbookBody">
            <div class="backgroundLb"></div>
          </div>
          <Footer />
        </StickyContainer>
      </div>
    );
  }
}
