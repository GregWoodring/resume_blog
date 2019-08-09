import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import routingReducer from './reducers/routingReducer';


const rootReducer = combineReducers({ 
    routing: routingReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));