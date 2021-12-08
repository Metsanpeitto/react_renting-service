/* eslint-disable */
import reservations from '../../api/reservations';
import items from '../../api/items';
import { RECEIVE_RESERVATIONS, RECEIVE_ITEMS } from '../constants/action-types';

export const receiveReservations = (reservations) => ({
  type: RECEIVE_RESERVATIONS,
  reservations,
});

export const getReservations = () => (dispatch) => {
  reservations.getReservations().then((reservations) => {
    dispatch(receiveReservations(reservations));
    return reservations;
  });
};

export const addReservation = (reservation) => (dispatch) => {
  reservations.addReservation(reservation).then((response) => {
    if (response === 'Created') {
      dispatch(getReservations());
    }
    return response;
  });
};

export const receiveItems = (items) => ({
  type: RECEIVE_ITEMS,
  items,
});

export const getItems = () => (dispatch) => {
  items.getItems().then((items) => {
    dispatch(receiveItems(items));
    return items;
  });
};

export const addItem = (item) => (dispatch) => {
  items.addItem(item).then((response) => {
    if (response === 'Created') {
      dispatch(getItems());
    }
    return response;
  });
};
