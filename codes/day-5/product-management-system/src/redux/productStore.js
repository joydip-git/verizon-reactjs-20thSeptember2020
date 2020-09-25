import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/rootSaga';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const productStore = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(loggerMiddleware, thunk, sagaMiddleware))
)
sagaMiddleware.run(rootSaga);

export default productStore;
/**
 * {
 *    productState:{},<--reducer function
 *    allproductsState:{} <--reducer function
 * }
 */