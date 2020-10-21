import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

// reducers:
import reducer from '../Reducers/combineReducers'

// sagas:
// import { helloSaga } from '../Sagas/sagas'

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
    reducer,
    defaultState,
    compose(...enhancers)
)

// saga middleware test
// sagaMiddleware.run(helloSaga)

export default store