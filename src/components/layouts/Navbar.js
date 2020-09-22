import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i class='fas fa-university'> </i> DevCamper 2.0
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/bootcamps'>Bootcamps</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
