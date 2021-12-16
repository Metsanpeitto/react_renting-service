import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservations } from '../../redux/api/api';

const MyReservations = () => {
  const reservations = useSelector((state) => state.reservationsReducer.reservations);
  const dispatch = useDispatch();
  const [calledReservations, setCalledReservations] = useState(null);

  useEffect(() => {
    if (!calledReservations && reservations.length === 0 && calledReservations !== reservations) {
      setCalledReservations(true);
      dispatch(getReservations());
    }
  });

  return (
    <>
      {
        reservations.map((reserve) => (
          <div key={reserve.city}>
            <div>
              <h4>{reserve.city}</h4>
              <h4>{reserve.date}</h4>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default MyReservations;
