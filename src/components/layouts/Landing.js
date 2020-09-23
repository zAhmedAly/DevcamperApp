import React, { useState } from 'react';

const Landing = () => {
  const [formData, setFormData] = useState({
    miles: '',
    zipcode: '',
  });

  const { miles, zipcode } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // login(email, password);
  };

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Find a Coding Bootcamp</h1>
          <p className="lead">
            Search, Rate and Read reviews on coding bootcamps
          </p>
          <form className="form" onSubmit={onSubmit}>
            <div className="grid-2">
              <div className="form-group">
                <input
                  type="text"
                  name="miles"
                  value={miles}
                  placeholder="Miles From"
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="zipcode"
                  value={zipcode}
                  placeholder="Enter Zipcode"
                  onChange={onChange}
                />
              </div>
            </div>
            <input
              type="submit"
              value="Find Bootcamps"
              className="btn btn-primary btn-block"
            />
          </form>
          {/* <br></br>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Register
            </Link>
            {'   '}
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Landing;
