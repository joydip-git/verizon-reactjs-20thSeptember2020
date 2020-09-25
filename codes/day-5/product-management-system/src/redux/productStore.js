import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';

const loggerMiddleware = createLogger();

export const createProductStore = () => {
    return createStore(productReducer, applyMiddleware(loggerMiddleware, thunk.default))
}