/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservations } from '../../redux/api/api';
import styles from './MyReservations.module.scss';

const MyReservations = () => {
  const items = useSelector((state) => state.itemsReducer.items);
  const reservations = useSelector((state) => state.reservationsReducer.reservations);
  const dispatch = useDispatch();
  const [calledReservations, setCalledReservations] = useState(null);

  useEffect(() => {
    console.log(items)
    console.log(reservations)
    if (!calledReservations && reservations.length === 0 && calledReservations !== reservations) {
      setCalledReservations(true);
      dispatch(getReservations());
    }
  });

  return (
    <div className={styles.container}>
      <h2>MY RESERVATIONS</h2>
      <div className={styles.cards}>
        {
          reservations.map(reserve => {
            let item = items.find(item => item.id === reserve.item_id)
            console.log(item.name);
            return (
              <div className={styles.card}>
                <h4>{item.name}</h4>
                <h4>{reserve.city}</h4>
                <h4>{reserve.date}</h4>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default MyReservations;
