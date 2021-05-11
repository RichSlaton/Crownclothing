import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

/*Provider is a compenent class that we get from Redux that we will be able to pass
the store object we will be able to give that redux store context to the rest of the 
application and we can dispatch actions to that store or we can pull values off of the 
store and into our components*/

//Passing store in as a value into Provider//
