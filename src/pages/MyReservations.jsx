/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { getReservations } from '../redux/api/api';
import { useNavigate } from "react-router-dom";

const MyReservations = () => {
    const reservations = useSelector((state) => state.reservationsReducer.reservations);
    const dispatch = useDispatch();
    const [calledReservations, setCalledReservations] = useState(null);
    let navigate = useNavigate();


    useEffect(() => {
        console.log("Hi");
        if (!calledReservations && reservations.length === 0) {
            setCalledReservations(true);
            //dispatch(getReservations());
        }
    });

    return (
        <section>
            {
                reservations.map(reserve => {
                    return (<div className="my-reservations-page">
                        <div className="reservation-card">
                            <h4 className="city">{reserve.city}</h4>
                            -
                            <h4 className="date">{reserve.date}</h4>
                        </div>
                    </div>)
                })
            }
            <button onClick={() => navigate('/')}>Go Back</button>
        </section>
    )
};

export default MyReservations;