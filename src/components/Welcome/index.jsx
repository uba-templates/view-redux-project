import React, { Component } from 'react'
import './index.less'
import { increaseState } from 'store/about/action'
import {connect} from 'react-redux'

@connect(
  (state) => {
    return ({
      count: state.about.count
    })
  },
  {
    increaseState
  }
)
export default class Welcome extends Component{
  constructor(props) {
    super(props);
  }

  handleIncrease = () => {
    this.props.increaseState();
  }

  render(){
    return (<div>
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title"> Welocome to this page </h3>
          <div>{this.props.count}</div>
          <div onClick={this.handleIncrease}>点击增加</div>
        </div>
        <div className="panel-body"> Thanks </div>
      </div>
    </div>)
  }
}
