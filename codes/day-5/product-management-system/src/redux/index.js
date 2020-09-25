import { getAllProductsReducer } from './reducers/getAllProductsReducer'
import { getProductReducer } from './reducers/getProductReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    allProductState: getAllProductsReducer,
    productState: getProductReducer
})

export default rootReducer;