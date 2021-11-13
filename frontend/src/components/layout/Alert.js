import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = (props) => (
	<div className="">
		{props.alerts !== null &&
			props.alerts.length > 0 &&
			props.alerts.map((alert) => (
				<div className={`alert alert-${alert.alertType}`} role='alert' key={alert.id}>
					{alert.msg}
				</div>
			))}
	</div>
);

Alert.propTypes = {
	alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
