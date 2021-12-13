import { ADD_ITEM, RECEIVE_ITEMS } from '../constants/action-types';

const initialState = { items: [] };

export const addItem = (payload) => ({
    type: ADD_ITEM,
    payload,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            const items = [...state.items, action.payload];
            return { ...state, items };
        }
        case RECEIVE_ITEMS: {
            const { items } = action;
            return { items };
        }

        default:
            return state;
    }
};

export default reducer;
