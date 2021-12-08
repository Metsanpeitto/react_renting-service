import { ADD_RESERVATION, RECEIVE_RESERVATIONS } from '../constants/action-types';

const initialState = { reservations: [] };

export const addReservation = (payload) => ({
  type: ADD_RESERVATION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION: {
      const reservations = [...state.reservations, action.payload];
      return { ...state, reservations };
    }
    case RECEIVE_RESERVATIONS: {
      const { reservations } = action;
      return { reservations };
    }
    default:
      return state;
  }
};

export default reducer;
