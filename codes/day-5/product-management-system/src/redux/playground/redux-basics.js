const redux = require('redux')
const logger = require('redux-logger')


//action/request types
const INCREASE_NUMBER = 'INCREASE_NUMBER';
const DECREASE_NUMBER = 'DECREASE_NUMBER';

//packate:{type:'INCREASE_NUMBER'}
//type of action
//additional data

const increaseActionCreator = (valueToIncreaseBy) => {
    return {
        type: INCREASE_NUMBER,
        payload: valueToIncreaseBy
    }
}

const decreaseActionCreator = (valueToDecreaseBy) => {
    return {
        type: DECREASE_NUMBER,
        payload: valueToDecreaseBy
    }
}

const initialState = {
    counter: 0
}
const counterReducer = (state = initialState, { type, payload }) => {
    let newState = null;
    switch (type) {
        case INCREASE_NUMBER:
            newState = {
                ...state,
                counter: state.counter + payload
            }
            break;

        case DECREASE_NUMBER:
            newState = {
                ...state,
                counter: state.counter - payload
            }
            // newState = Object.create({}, state);
            // newState.counter = state.counter + payload;
            break;

        default:
            newState = { ...state };
            break;
    }
    return newState;
}

const reduxLogger = logger.createLogger();
const middleware = redux.applyMiddleware;
const store = redux.createStore(counterReducer, middleware(reduxLogger));

console.log('initial state: ', store.getState())

const actionIncrease = increaseActionCreator(10);
store.dispatch(actionIncrease);
store.dispatch(decreaseActionCreator(5));
store.dispatch(increaseActionCreator(20))
store.dispatch(decreaseActionCreator(5))



