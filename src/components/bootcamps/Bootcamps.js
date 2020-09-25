import React from 'react';
//import PropTypes from 'prop-types';
import BootcampFilter from './BootcampFilter';
import BootcampList from './BootcampList';

const Bootcamps = (props) => {
  return (
    // <div className="container">
    <div className="bootcamps-grid">
      <div className="bootcamps-style">
        <BootcampFilter />
      </div>
      <div className="bootcamps-style">
        <BootcampList />
      </div>
    </div>
    // </div>
  );
};

//Bootcamps.propTypes = {};

export default Bootcamps;
