import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./CarouselSlider.css";

export class CarouselSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      slides: [
        <img
          src="https://cdn.discordapp.com/attachments/312173234663718913/729591162968473640/IMG_6027.JPG"
          alt="Girl in a jacket"
        />,
        <img
          src="https://cdn.discordapp.com/attachments/312173234663718913/729591746484371506/IMG_6032.JPG"
          alt="Girl in a jacket"
        />,
        <img
          src="https://cdn.discordapp.com/attachments/312173234663718913/729591969680195606/IMG_6048.JPG"
          alt="Girl in a jacket"
        />,
      ],
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div class="carsliderContainer">
        <div class="wrapperCar">
          <Carousel
            value={this.state.value}
            onChange={this.onChange}
            slides={this.state.slides}
            autoPlay={6000}
            animationSpeed={2000}
            infinite
            draggable={false}
            offset={0}
            addArrowClickHandler
          />
        </div>
      </div>
    );
  }
}
