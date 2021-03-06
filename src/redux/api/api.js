import reservations from '../../api/reservations';
import items from '../../api/items';
import users from '../../api/user';
import {
  RECEIVE_RESERVATIONS, RECEIVE_USER, RESET_USER, RECEIVE_ITEMS, REMOVE_ITEM,
} from '../constants/action-types';

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

export const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  itemId,
});

export const deleteItem = (item) => (dispatch) => {
  items.deleteItem(item).then((response) => {
    dispatch(removeItem(response));
    return response;
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

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

export const resetUser = () => ({
  type: RESET_USER,
});

export const signUp = (user) => (dispatch) => {
  users.signUp(user).then((response) => {
    if (response === 'Created') {
      dispatch(receiveUser(response));
    }
    return response;
  });
};

export const signIn = (user) => (dispatch) => {
  users.signIn(user).then((response) => {
    if (response.statusText === 'Created') {
      dispatch(receiveUser(response.data));
    }
  });
};

export const signOut = (user) => (dispatch) => {
  users.signOut(user).then((response) => {
    dispatch(resetUser());
    return response;
  });
};
