const { default: Axios } = require('axios');
const thunk = require('redux-thunk');
const { createLogger } = require('redux-logger');
const { applyMiddleware, createStore } = require('redux');

const loggerMiddleware = createLogger();

const GET_ALL_PRODUCTS_INITIATE = 'GET_ALL_PRODUCTS_INITIATE';
const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
const GET_ALL_PRODUCTS_FAILURE = 'GET_ALL_PRODUCTS_FAILURE';

const getAllProductsInitiateActionCreator = () => {
    return {
        type: GET_ALL_PRODUCTS_INITIATE
    }
}
const getAllProductsSuccessActionCreator = (products) => {
    return {
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: products
    }
}
const getAllProductsFailureActionCreator = (errorMessage) => {
    return {
        type: GET_ALL_PRODUCTS_FAILURE,
        payload: errorMessage
    }
}


const initialState = {
    products: [],
    errorMessage: '',
    loading: true
}
const productReducer = (state = initialState, action) => {
    let newState = null;
    switch (action.type) {
        case GET_ALL_PRODUCTS_INITIATE:
            newState = {
                ...state,
                loading: true,
                products: [],
                errorMessage: ''
            }
            break;
        case GET_ALL_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                loading: false,
                products: action.payload,
                errorMessage: ''
            }
            break;
        case GET_ALL_PRODUCTS_FAILURE:
            newState = {
                ...state,
                loading: false,
                products: [],
                errorMessage: action.payload
            }
            break;
        default:
            newState = { ...state }
            break;
    }
    return newState;
}

const store = createStore(productReducer, applyMiddleware(loggerMiddleware, thunk.default))

const fetchProductsAsync = (callbackFn) => {
    return function (disptacherObj) {
        const getAllProductsInitiateRequest = getAllProductsInitiateActionCreator();
        callbackFn('dispatching initiation')
        disptacherObj(getAllProductsInitiateRequest);
        Axios.get('http://127.0.0.1:8081/productservic')
            .then(resp => {
                const getAllProductsSuccessRequest = getAllProductsSuccessActionCreator(resp.data);
                callbackFn('dispatching update')
                disptacherObj(getAllProductsSuccessRequest)
            })
            .catch(e => {
                const getAllProductsFailureRequest = getAllProductsFailureActionCreator(e.message);
                callbackFn('sorry...could not fetch data')
                disptacherObj(getAllProductsFailureRequest);
            })
    }
}
const callback = fetchProductsAsync((message) => console.log(message));
store.dispatch(callback)