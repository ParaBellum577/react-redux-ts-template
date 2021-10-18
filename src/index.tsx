/* eslint-disable no-alert */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from 'pages/app';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

