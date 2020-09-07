import { createStore, combineReducers } from 'redux';
import contactReducer from './contacts/reducer';

const store = createStore(combineReducers(contactReducer));

export default store;