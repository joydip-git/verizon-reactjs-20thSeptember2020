import * as GetProductActionTypes from '../actiontypes/getProductActionTypes'

const initialState = {
    products: [],
    errorMessage: '',
    loading: true
}
export const getAllProductsReducer = (state = initialState, action) => {
    let newState = null;
    switch (action.type) {
        case GetProductActionTypes.GET_ALL_PRODUCTS_INITIATE:
            newState = {
                ...state,
                loading: true,
                products: [],
                errorMessage: ''
            }
            break;
        case GetProductActionTypes.GET_ALL_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                loading: false,
                products: action.payload,
                errorMessage: ''
            }
            break;
        case GetProductActionTypes.GET_ALL_PRODUCTS_FAILURE:
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