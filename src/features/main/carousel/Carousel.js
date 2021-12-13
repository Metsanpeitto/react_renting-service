/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import Slider from 'react-slick';
import ItemCard from '../ItemCard';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';

const Carousel = () => {
  const settings = {
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
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className={styles.slider}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </Slider>
    </>
  );
};

export default Carousel;
