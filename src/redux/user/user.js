/* eslint-disable */
import { SIN_IN, SIGN_UP, RECEIVE_USER, RESET_USER } from '../constants/action-types';

const initialState = { user: [] };

export const signIn = (payload) => ({
    type: SIN_IN,
    payload,
});

export const signUp = (payload) => ({
    type: SIGN_UP,
    payload,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP: {
            const user = action.user;
            return { ...state, user };
        }
        case RECEIVE_USER: {
            const user = action.user;
            return { ...state, user };
        }
        case RESET_USER: {
            const user = initialState.user;
            return { ...state, user };
        }
        default:
            return state;
    }
};

export default reducer;
