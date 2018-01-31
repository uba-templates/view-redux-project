import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { browserHistory, Router } from 'react-router'

import createStore from './store'
import mainRoute from './route';


// var store = createStore();
// var routes = mainRoute(store);
// ReactDOM.render(
//     <Provider store={store}>
//         <div style = {{ height: '100%'}}>
//         <Router history={browserHistory} children={routes} />            
//         </div>
//     </Provider>,
//     document.getElementById('app')
// )


const store = createStore();
const routes = mainRoute();
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} children={routes} />            
    </Provider>,
    document.getElementById('app')
)