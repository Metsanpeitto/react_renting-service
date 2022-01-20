/* eslint-disable */
import { ADD_ITEM, RECEIVE_ITEMS, REMOVE_ITEM } from '../constants/action-types';

const initialState = { items: [] };

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
    case REMOVE_ITEM: {
      const { itemId } = action;
      const items = [...state.items];
      const newItems = []
      items.map((i) => {
        if (String(i.id) !== itemId) {
          newItems.push(i);
        }
      });

      return { ...state, newItems };
    }

    default:
      return state;
  }
};

export default reducer;
