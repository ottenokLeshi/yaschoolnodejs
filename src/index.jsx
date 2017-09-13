import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/configureStore';
import MyForm from './helpers/MyForm';

/* global window:true */
window.MyForm = MyForm;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  /* global document:true */
  document.getElementById('root')
);
