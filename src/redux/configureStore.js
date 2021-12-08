import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reservationsReducer from './reservations/reservations';
import itemsReducer from './items/items';

const reducer = combineReducers({
  reservationsReducer,
  itemsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
