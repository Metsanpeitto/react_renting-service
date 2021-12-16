/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable */


import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';

const Carousel = ({ items }) => {
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
    <Slider {...settings} className={styles.slider} key="slider">

      {
        items.map((item) => (
          <Link
            key={item.id}
            to={{
              pathname: `/details/${item.name}`,
            }}
            data={item}
          >
            <ItemCard key={item.id} item={item} />
          </Link>
        )
      )}

    </Slider>
  );
};

export default Carousel;

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    },
  ).isRequired).isRequired,
};
