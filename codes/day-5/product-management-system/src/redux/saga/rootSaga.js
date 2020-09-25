import { takeEvery, call, put, take } from 'redux-saga/effects'
import * as ActionTypes from '../actiontypes/getProductActionTypes'
import * as Actions from '../actions/getProductActions'

const fetchAllProducts = async () => {
    const response = await fetch('http://127.0.0.1:8081/productservice');
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.Errors);
    }
    return data;
}

function* loadProducts() {
    try {
        //make async call to the API server
        const products = yield call(fetchAllProducts);
        //until and unless you receive data dont execute the next line
        //dispatch success request against redux store
        const getProductsAction = Actions.getAllProductsSuccessActionCreator(products);
        yield put(getProductsAction);
    } catch (error) {
        //dispatch failure request against redux store
        yield put(Actions.getAllProductsFailureActionCreator(error))
    }
}

export default function* rootSaga() {
    console.log('saga called')
    yield takeEvery(ActionTypes.GET_ALL_PRODUCTS_INITIATE, loadProducts)
    // yield take('LOGIN',)
    // yield takeEvery('ADD_TO_CART')
    // yield take('CLEAR_STORAGE')
    // yield take('LOG_OUT')
}

