import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import User from './User';
import { getAllProfiles } from '../../actions/actionsProfiles';

const Users = ({
  getAllProfiles,
  profile: { profiles, loading }
}) => {
  useEffect(() => {
    getAllProfiles();
  }, [getAllProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <p>Browse through members</p>
          <div>
            {profiles.length > 0 ? (
              profiles.map((profile) =>
                <User key={profile._id} profile={profile} />
              )
            ) : (
              <h4>No members were found</h4>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

Users.propTypes = {
	getAllProfiles: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ profile: state.profile });

export default connect(mapStateToProps, { getAllProfiles })(Users);