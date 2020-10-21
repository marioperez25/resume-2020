import { createStore } from 'redux'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

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
    devtools
)

export default store