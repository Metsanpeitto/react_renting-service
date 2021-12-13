/* eslint-disable */
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.scss";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#97bf0f", padding: "10px 10px 10px 20px", width: "auto", height: "auto", left: "0", zIndex: "1", borderTopRightRadius: "50%", borderBottomRightRadius: "50%", border: "1px solid #97bf0f"}}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#97bf0f", padding: "10px 20px 10px 10px", width: "auto", height: "auto", right: "0", zIndex: "1", borderTopLeftRadius: "50%", borderBottomLeftRadius: "50%", border: "1px solid #97bf0f"}}
      onClick={onClick}
    />
  );
}

export default class Carousel extends Component {
  render() {
    var settings = {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        <Slider {...settings} className={styles.slider}>
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
          <div>f</div>
        </Slider>
      </>
    );
  }
}