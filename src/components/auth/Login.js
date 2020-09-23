import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // login(email, password);
  };
  return (
    <Fragment>
      {/* <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'> */}
      <div className='form-container'>
        {/* <img src={logo} alt='DevCamper' className='my-2' /> */}
        <h1 className='text-primary my-1'>
          <i className='fas fa-user' /> User Log In
        </h1>
        {/* <p className='lead'>
          <i className='fas fa-user' /> Sign Into Your Account
        </p> */}
        <form className='form' onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={onChange}
              minLength='6'
            />
          </div>
          <input
            type='submit'
            className='btn btn-primary btn-block'
            value='Log In'
          />
        </form>
        <div className='forgotLink text-primary'>
          <Link to='/resetPassword'>Having trouble logging in?</Link>
        </div>
        <div className='loginSignUpSeparator'>
          <span className='textInSeparator'>or</span>
          <p>
            Don't have an account?{' '}
            <Link to='/register'>
              <strong>Register</strong>
            </Link>
          </p>
        </div>
      </div>
      {/* </div>
        </div>
      </section> */}
    </Fragment>
  );
};

Login.propTypes = {};

export default Login;
