/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../../redux/api/api';

import Carousel from './carousel/Carousel';
import styles from './Main.module.scss';

const Main = () => {

  const items = useSelector((state) => state.itemsReducer.items);
  const dispatch = useDispatch();
  const [calledItems, setCalledItems] = useState(null);

  useEffect(() => {
    console.log("...getting items...");
    if (!calledItems && items.length === 0) {
      setCalledItems(true);
      dispatch(getItems());
    }
    console.log(items);
  });

  return (
    <div className={styles.main}>
      <h1>LATEST MODELS</h1>
      <p>Please select a model</p>
      <Carousel />
    </div>
  );
};

export default Main;
