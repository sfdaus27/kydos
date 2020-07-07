import React from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./CarouselSlider.css";

export class CarouselSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      slides: [
        <img src="https://cdn.discordapp.com/attachments/312173234663718913/729591162968473640/IMG_6027.JPG" />,
        <img src="https://cdn.discordapp.com/attachments/312173234663718913/729591746484371506/IMG_6032.JPG" />,
        <img src="https://cdn.discordapp.com/attachments/312173234663718913/729591969680195606/IMG_6048.JPG" />,
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
            // arrowLeft={<Icon name="angle-left" />}
            // arrowRight={<Icon name="angle-right" />}
            draggable={false}
            addArrowClickHandler
          />
        </div>
      </div>
    );
  }
}
