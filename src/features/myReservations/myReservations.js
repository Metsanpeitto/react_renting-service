/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservations } from '../../redux/api/api';

const MyReservations = () => {

  const reservations = useSelector((state) => state.reservationsReducer.reservations);
  const dispatch = useDispatch();
  const [calledReservations, setCalledReservations] = useState(null);

  useEffect(() => {
    console.log("Hi");
    if (!calledReservations && reservations.length === 0) {
      setCalledReservations(true);
      dispatch(getReservations());
    }
    console.log(reservations);
  });

  return (
    <section>
      {
        reservations.map(reserve => {
          return (
            <div>
              <div>
                <h4>{reserve.city}</h4>
                <h4>{reserve.date}</h4>
              </div>
            </div>)
        })
      }
    </section>
  )
};

export default MyReservations;
