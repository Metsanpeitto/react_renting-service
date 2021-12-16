import axios from 'axios';
import { toast } from 'react-toastify';

const url = 'https://frozen-dusk-66130.herokuapp.com/reservations';

const getReservations = async () => axios.get(`${url}`).then((result) => {
  let reservations = [];
  if (result.status === 200) {
    reservations = result.data;
  } else {
    toast.warning('There was an error');
  }
  return reservations;
});

const addReservation = async (reservation) => {
  const token = localStorage.getItem('token');
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
    .then((res) => {
      if (res.status === 201) {
        toast.success('Reservation created successfullly');
        localStorage.setItem('token', res.headers.authorization);
        return res;
      }
      toast.warning('There was an error');
      return null;
    });

  return response;
};

export default { getReservations, addReservation };
