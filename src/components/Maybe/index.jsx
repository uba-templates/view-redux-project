import React,{ Component } from 'react';
import './index.less';

export default class Maybe extends Component{
  constructor(props) {
   super(props);
 }
  render(){
    return (<div>
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title"> Maybe to this page </h3>
        </div>
        <div className="panel-body"> Mayb Thanks </div>
      </div>
    </div>)
  }
}
