/* eslint-disable */
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
//import reservationsReducer from "./reservations/reservations";
//import itemsReducer from "./items/items";
//import userReducer from "./user/user";

const reducer = combineReducers({
    //reservationsReducer,
    //itemsReducer,
    //userReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
