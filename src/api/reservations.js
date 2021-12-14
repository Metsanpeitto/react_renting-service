/* eslint-disable */
import axios from "axios";

const url = "https://frozen-dusk-66130.herokuapp.com/reservations";

const getReservations = async () =>
  await axios.get(`${url}`).then((result) => {
    let reservations = [];
    if (result.status === 200) {
      reservations = result.data;
    }
    return reservations;
  });

const addReservation = async (reservation) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const body = {
    user_id: reservation.userId,
    city: reservation.city,
    date: reservation.value,
    item_id: reservation.itemId,
  };

  const response = axios
    .post(`${url}`, body, config)
    .then((result) => result.data);
  return response;
};

export default { getReservations, addReservation };
