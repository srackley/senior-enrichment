import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import rootReducer from './reducers';

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger(),
  )),
);
