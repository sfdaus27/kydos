import React from "react";
import { Navbar } from "./Navbar";
import { StickyContainer, Sticky } from "react-sticky";
import { Footer } from "./Footer";
import "./Items.css";

class Items extends React.Component {
  render() {
    return (
      <div class="itemsContainer">
        <StickyContainer>
          <Sticky disableCompensation>
            {({ style }) => (
              <div style={style}>
                <Navbar />
              </div>
            )}
          </Sticky>
          <div class="itemsContent">
            <div class="backgroundItems"></div>
          </div>
          <Footer />
        </StickyContainer>
      </div>
    );
  }
}

export default Items;
