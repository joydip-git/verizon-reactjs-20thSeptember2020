import * as GetProductActionTypes from '../actiontypes/getProductActionTypes'

const initialState = {
    product: null,
    errorMessage: '',
    loading: true
}
export const getProductReducer = (state = initialState, action) => {
    let newState = null;
    switch (action.type) {
        case GetProductActionTypes.GET_PRODUCT_INITIATE:
            newState = {
                ...state,
                loading: true,
                product: null,
                errorMessage: ''
            }
            break;
        case GetProductActionTypes.GET_PRODUCT_SUCCESS:
            newState = {
                ...state,
                loading: false,
                product: action.payload,
                errorMessage: ''
            }
            break;
        case GetProductActionTypes.GET_PRODUCT_FAILURE:
            newState = {
                ...state,
                loading: false,
                product: null,
                errorMessage: action.payload
            }
            break;
        default:
            newState = { ...state }
            break;
    }
    return newState;
}