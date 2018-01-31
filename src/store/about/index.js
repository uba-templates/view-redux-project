import {
    INCREASE,
    DECREASE
} from './action'

const initState = {
    count: 0
}

export default ( state = initState, action) => {
    // console.log(dispatching...);
    switch (action.type) {
        // ++
        case INCREASE: {
            let count = state.count + 1;
            return Object.assign({}, state, { count: count })
        }
        
        // --
        case DECREASE: {
            return Object.assign({}, state, { count: state.count-- })
        }

        // default
        default:
            return state;
    }
}