import React from 'react';
//import PropTypes from 'prop-types';
import BootcampFilter from './BootcampFilter';
import BootcampList from './BootcampList';

const Bootcamps = (props) => {
  return (
    <div className='container'>
      <div className='grid-2'>
        <div>
          <BootcampFilter />
        </div>
        <div>
          <BootcampList />
        </div>
      </div>
    </div>
  );
};

//Bootcamps.propTypes = {};

export default Bootcamps;
