import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AUTHENTICATE_THE_USER } from './redux/constants/action-types';
import store from './redux/configureStore';
import App from './App';
import './index.css';

// Check for token and update application state if required
const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: AUTHENTICATE_THE_USER });
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
