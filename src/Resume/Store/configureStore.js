import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const sagaMiddleware = createSagaMiddleware()
const enhancers = [devtools, applyMiddleware(sagaMiddleware)];
// store:
var defaultState = {
    originAmmount: 69
}

// reducer:
function  ammount(state = defaultState,action){
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            originAmmount: action.data
        }
    }
    return state
}

// store:
var store = createStore(
    ammount,
    defaultState,
    compose(...enhancers)
)

export default store