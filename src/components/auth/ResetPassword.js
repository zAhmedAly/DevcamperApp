import React, { Fragment, useState } from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ResetPassword = (props) => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const { email } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // login(email, password);
  };
  return (
    <Fragment>
      <div className='form-container'>
        <div className='forgotLink'>
          <h1 className='x-large text-primary my-1'>
            <i className='fas fa-user' />
          </h1>
          <p className='lead'>Need help with your password ?</p>
          <span>
            Enter the email you use for DevCamper, and we’ll help you create a
            new password.
          </span>
        </div>
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
          <input
            type='submit'
            className='btn btn-primary btn-block my-2'
            value='Reset Password'
          />
        </form>
        <div className='forgotLink text-primary'>
          <Link to='/login'>Return to DevCamper login</Link>
        </div>
      </div>
    </Fragment>
  );
};

//ResetPassword.propTypes = {};

export default ResetPassword;
