import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { createProductStore } from './redux/productStore'

const productStore = createProductStore();

ReactDOM.render(
  <Provider store={productStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

