import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../../redux/api/api';

import Carousel from './carousel/Carousel';
import styles from './Main.module.scss';

const Main = () => {
  const items = useSelector((state) => state.itemsReducer);
  const dispatch = useDispatch();
  const [calledItems, setCalledItems] = useState(null);

  useEffect(() => {
    dispatch(getItems());
    if (!calledItems && items.length === 0) {
      dispatch(getItems());
    }
  }, []);

  useEffect(() => {
    setCalledItems(items.items);
  }, [items]);

  return (
    <div className={styles.main}>
      {calledItems ? (
        <>
          <h1>LATEST MODELS</h1>
          <p>Please select a model</p>
          <Carousel items={calledItems} />
        </>
      ) : (
        <>
          <h1>THERE IS NO MODELS YET</h1>
          <p>Please create an account then boats</p>
        </>
      )}
    </div>
  );
};

export default Main;
