import './index.less'
import {connect} from 'react-redux'
import {Component} from 'react'
import axios from 'axios'
import { Button } from 'tinper-bee';


// const Home = () => (
//     <div>
//         <h1>Home Page</h1>
//     </div>
// )

@connect(
    (state) => {
        return ({
            count: state.about.count
        })
    }
)
class Home extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        axios.get('https://mock.yonyoucloud.com/mock/38/test/getlist')
        .then(function (response) {
            console.log("response:",response);
        })
        .catch(function (error) {
            console.log("error:", error);
        });

        axios.get('/test/getlist')
        .then(function (response) {
            console.log("response:",response);
        })
        .catch(function (error) {
            console.log("error:", error);
        });

    }
    render(){
        return (
            <div>
                <h1>Home Page</h1>
                <Button disabled>disabled</Button>
                <div>{this.props.count}</div>
            </div>            
        )
    }
}

export default Home