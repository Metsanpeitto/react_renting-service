/* eslint-disable */
import axios from 'axios';

const url = 'http://localhost:3000/reservations';

const getReservations = async () => await axios.get(`${url}`).then((result) => {
    let reservations = [];
    if (result.status === 200) {
        reservations = result.data;
    }
    return reservations;
});

export default { getReservations, addReservation };