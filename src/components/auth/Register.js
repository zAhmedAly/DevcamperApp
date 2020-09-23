import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    type: 'user',
  });

  const { name, email, password, password2, type } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password, type });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/bootcamps' />;
  }

  return (
    <Fragment>
      {/* <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'> */}
      <div className='form-container'>
        <h1 className='my-1 text-primary'>
          <i className='fas fa-user-plus' /> Register User
        </h1>
        {/* <p className='lead'>
          <i className='fas fa-user' /> Create Your Account
        </p> */}
        <form className='form' onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={onChange}
            />
            <small className='form-text'>
              Site uses Gravatar so if you want a profile image, use a Gravatar
              email
            </small>
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={password2}
              onChange={onChange}
            />
          </div>
          {/* <h5>Contact Type</h5> */}
          <div className='form-group'>
            <label htmlFor='type' className='medium'>
              User Role :{' '}
            </label>{' '}
            <input
              type='radio'
              name='type'
              value='user'
              checked={type === 'user'}
              onChange={onChange}
            />{' '}
            User{' '}
            <input
              type='radio'
              name='type'
              value='publisher'
              checked={type === 'publisher'}
              onChange={onChange}
            />{' '}
            Publisher
          </div>
          <input
            type='submit'
            className='btn btn-primary btn-block my-1'
            value='Register'
          />
        </form>

        <div className='loginSignUpSeparator'>
          <span className='textInSeparator'>or</span>
          <p>
            Already have an account?{' '}
            <Link to='/login'>
              <strong>Log In</strong>
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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
