import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/posts" />;
  }
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

Landing.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);