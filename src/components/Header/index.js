import React from 'react';
import { IndexLink, Link} from 'react-router';
import './index.less';

const Header = () => (
   <div className="header">
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/about' activeClassName='route--active'>
      About
    </Link>
    {' · '}    
    <Link to='/404' activeClassName='route--active'>
      404
    </Link>
    {' · '}
    <Link to='/test' activeClassName='route--active'>
      找不到
    </Link>    
   </div> 
)

export default Header;