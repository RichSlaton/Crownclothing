import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

/*Adding middleware (in between action & root reducer) to our store so when actions get fired or 
dispatched we can catch them and (console.logs)displays them.*/

//Redux-logger is Middleware

const middlewares = [logger];
//Middleware is logger in an Array
const store = createStore(rootReducer,applyMiddleware(...middlewares))
//A function that gets both rootReducer and the return value of applyMiddlewares

/*ApplyMiddleware spreads in middlewares which spreads all of the values from logger as
individual arguments. If we need to add anything we can just add it to the array value*/

export default store;