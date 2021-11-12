import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
    <div className="d-grid gap-4 d-flex justify-content-center align-items-center height100VH">
      <Link to='/register' className='btn btn-primary px-3'>
        Register
      </Link>
      <Link to='/login' className='btn btn-primary px-4'>
        Login
      </Link>
    </div>
	);
};

export default Landing;