import { createStore } from 'redux'

// store:
var defaultState = {
    originAmmount: '69.00'
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
var store = createStore(ammount)

export default store