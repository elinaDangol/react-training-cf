import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Navbar />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);
