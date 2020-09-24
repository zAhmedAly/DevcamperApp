import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/bootcamps" />;
  }

  return (
    <Fragment>
      <div className="form-container">
        <h1 className="text-primary my-1">
          <i className="fas fa-user" /> User Log In
        </h1>

        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              minLength="6"
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="Log In"
          />
        </form>
        <div className="forgotLink text-primary">
          <Link to="/resetPassword">Having trouble logging in?</Link>
        </div>
        <div className="loginSignUpSeparator">
          <span className="textInSeparator">or</span>
          <p>
            Don't have an account?{' '}
            <Link to="/register">
              <strong>Register</strong>
            </Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
