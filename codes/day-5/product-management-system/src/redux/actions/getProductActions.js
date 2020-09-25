import { getProductById, getProducts } from '../../service/ProdudctService'
import * as GetProductActionTypes from '../actiontypes/getProductActionTypes'

export const getAllProductsInitiateActionCreator = () => {
    return {
        type: GetProductActionTypes.GET_ALL_PRODUCTS_INITIATE
    }
}
export const getAllProductsSuccessActionCreator = (products) => {
    return {
        type: GetProductActionTypes.GET_ALL_PRODUCTS_SUCCESS,
        payload: products
    }
}
export const getAllProductsFailureActionCreator = (errorMessage) => {
    return {
        type: GetProductActionTypes.GET_ALL_PRODUCTS_FAILURE,
        payload: errorMessage
    }
}


export const getProductInitiateActionCreator = () => {
    return {
        type: GetProductActionTypes.GET_PRODUCT_INITIATE,
    }
}
export const getProductSuccessActionCreator = (product) => {
    return {
        type: GetProductActionTypes.GET_PRODUCT_SUCCESS,
        payload: product
    }
}
export const getProductFailureActionCreator = (errorMessage) => {
    return {
        type: GetProductActionTypes.GET_PRODUCT_FAILURE,
        payload: errorMessage
    }
}

export const fetchProductsAsync = () => {
    return function (disptach) {

        const getAllProductsInitiateRequest = getAllProductsInitiateActionCreator();

        disptach(getAllProductsInitiateRequest);

        getProducts()
            .then(resp => {
                const getAllProductsSuccessRequest = getAllProductsSuccessActionCreator(resp.data);

                disptach(getAllProductsSuccessRequest)
            })
            .catch(e => {
                const getAllProductsFailureRequest = getAllProductsFailureActionCreator(e.message);

                disptach(getAllProductsFailureRequest);
            })
    }
}

export const fetchProductByIdAsync = (productId) => {
    return function (disptach) {

        const getProductInitiateRequest = getProductInitiateActionCreator();

        disptach(getProductInitiateRequest);

        getProductById(productId)
            .then(resp => {
                const getProductSuccessRequest = getProductSuccessActionCreator(resp.data);

                disptach(getProductSuccessRequest)
            })
            .catch(e => {
                const getProductFailureRequest = getProductFailureActionCreator(e.message);

                disptach(getProductFailureRequest);
            })
    }
}