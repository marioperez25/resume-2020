import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

// reducers:
import reducers from '../Reducers/combineReducers'

// sagas:
//import sagas from '../sagas/sagas'

// enhancers composition:
const devtoolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const sagaMiddleware = createSagaMiddleware()
const enhancers = [
    devtoolsMiddleware,
    applyMiddleware(sagaMiddleware)
];

// default state/store:
var defaultState = {
}

// store:
var store = createStore(
    reducers,
    defaultState,
    compose(...enhancers)
)

// then run the saga
//sagaMiddleware.run(sagas)

export default store