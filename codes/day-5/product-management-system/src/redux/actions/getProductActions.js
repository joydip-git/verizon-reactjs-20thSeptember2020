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

export const fetchProductsAsync = () => {
    return function (disptach) {

        const getAllProductsInitiateRequest = getAllProductsInitiateActionCreator();

        disptach(getAllProductsInitiateRequest);

        Axios.get('http://127.0.0.1:8081/productservic')
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