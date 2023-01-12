import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';

import App from './App';
import { listReduce } from './store/reducers/list.reduce';
import { moviesReducer } from './store/reducers/reducer';

const reducers = combineReducers({
  movies: moviesReducer,
  list: listReduce
})

const GlobalState = createStore(
  reducers
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={GlobalState}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)