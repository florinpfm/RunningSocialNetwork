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
        <div className='inPage'>
        <div className="container-fluid">
          <div className="row justify-content-center bg-lightXXX">
            <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-9 col-xxl-9 bg-lightXXX ">
              <div className="my-4 text-center">
                <h3>Browse through members</h3>
              </div>
              <div className="d-flex justify-content-center flex-wrap p-4 shadow bg-light" style={{borderRadius: 25}}>
  
                {/* each Profile is build one after the other here */}
                {profiles.length > 0 ? (
                  profiles.map((profile) =>
                    <User key={profile._id} profile={profile} />
                  )
                ) : (
                  <h4>No members were found</h4>
                )}
  
              </div>
            </div>
          </div>
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