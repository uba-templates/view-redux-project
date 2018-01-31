import './index.less'
import { Link } from 'react-router';

const About = ({children}) => (
    <div>
        <h1>About Page</h1>
        <Link to='/about/welcome'>welcome link</Link>
        <main>
            { children }
        </main>
    </div>
)

export default About