import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Routes>
    <Route
		{...rest}
		render={(props) =>
			!auth.isAuthenticated && !auth.loading ? (
				<Navigate replace to='/index' /> 
			) : (
				<Component {...props} />
			)
		}
	/>
  </Routes>
	
);

PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);
