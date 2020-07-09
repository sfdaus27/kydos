import React from "react";
import { Navbar } from "./Navbar";
import "./Main.css";
import { StickyContainer, Sticky } from "react-sticky";
import { Footer } from "./Footer";
import { CarouselSlider } from "./CarouselSlider";
import MediaCard from "./Card";

export class Main extends React.Component {
  render() {
    return (
      <StickyContainer>
        <div class="sticky"></div>
        <Sticky disableCompensation>
          {({ style }) => (
            <div style={style}>
              <Navbar />
            </div>
          )}
        </Sticky>
        <div class="wrapperMainAll">
          <div class="mainBody">
            <div class="carWrapper">
              <CarouselSlider />
            </div>
          </div>
          <div className="wrapperContent">
            <div class="secondContent">
              <MediaCard />
              <MediaCard />
              <MediaCard />
              <MediaCard />
            </div>
            <div class="secondContent">
              <MediaCard />
              <MediaCard />
              <MediaCard />
              <MediaCard />
            </div>
            <div class="secondContent">
              <MediaCard />
              <MediaCard />
              <MediaCard />
              <MediaCard />
            </div>
            <div class="secondContent">
              <MediaCard />
              <MediaCard />
              <MediaCard />
              <MediaCard />
            </div>
            <div class="secondContent">
              <MediaCard />
              <MediaCard />
              <MediaCard />
              <MediaCard />
            </div>

          </div>
        </div>
        <Footer />
      </StickyContainer>
    );
  }
}
