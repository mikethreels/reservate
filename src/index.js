import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import configureStore from './redux/store/store'

let { store, persistor } = configureStore()

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);

