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

const addReservation = async (reservation) => {
  console.log(reservation)
  axios.post(`${url}`, {
    city: reservation.city,
    date: reservation.value,
    item_id: reservation.itemId
  })
    .then((result) => result.data);
}


export default { getReservations, addReservation };
