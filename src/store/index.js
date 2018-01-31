import { createStore, combineReducers, applyMiddleware } from 'redux'

// middleware
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'

// reducers
import home from './home'
import about from './about'

// combile reducers & load middleware
export default () => (
    createStore(
        combineReducers({
            home,
            about
        }),
        applyMiddleware(
            thunkMiddleware,
            promiseMiddleware
        )
    )
)
