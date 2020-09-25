import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './index'

const loggerMiddleware = createLogger();

export const createProductStore = () => {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(loggerMiddleware, thunk))
    )
}
/**
 * {
 *    productState:{},<--reducer function
 *    allproductsState:{} <--reducer function
 * }
 */