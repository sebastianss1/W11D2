import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = () => createStore(rootReducer, applyMiddleware(thunk, logger));