import {createStore, applyMiddleware} from 'redux';
import Reducers from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
console.log('store is called');
const initialState = {};
const middleware = [thunk];

const store = createStore(
  Reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
