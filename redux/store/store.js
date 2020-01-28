import {createStore, applyMiddleware} from 'redux';
import Reducers from '../reducers/reducers';

console.log('store is called');
const initialState = {};

const store = createStore(
  Reducers,
  initialState,
);
export default store;
