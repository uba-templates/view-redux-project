import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import './layout.less'

import Header from './components/Header'

import {increaseState, decreaseState} from './store/home/action'


// const IndexLayout = ({ children }) => (
//     <div classname="container">
//         <Header />
//         <div className="content">
//             {children}
//         </div>
//     </div>
// )
// export default IndexLayout;

@connect (
    (state) => {
        return {
            count: state.home.count
        }
    },
    {
        increaseState,
        decreaseState
    }
)
export default class IndexLayout extends Component {
    constructor(props) {
        super(props);
    }

    handleIncrease = () => {
        this.props.increaseState();
    }

    render() {
        return (
            <div classname="container">
                <Header />
                {/* reducer count */}
                <div>{this.props.count}</div>
                <div onClick={this.handleIncrease}>Click to +1</div>
                {/* router info */}
                <div className="content">
                    {this.props.children}
                </div>
            </div>  
        )
    }
}

IndexLayout.PropTypes = {
    children: PropTypes.element.isRequired
}


