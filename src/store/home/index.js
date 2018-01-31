import {
    INCREASE,
    DECREASE
} from './action'

var initState = {
    count: 100
}

export default ( state = initState, action) => {

    switch (action.type) {
        // ++
        case INCREASE: {
            let count = state.count + 1;
            return Object.assign({}, state, { count: count })
        }
        
        // --
        case DECREASE: {
            let count = state.count - 1;
            return Object.assign({}, state, { count: count })
        }

        // default
        default:
            return state;
    }
}