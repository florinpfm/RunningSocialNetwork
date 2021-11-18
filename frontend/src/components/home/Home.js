import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount, getCurrentUserProfile } from '../../actions/actionsProfiles';
import Spinner from '../layout/Spinner';
import { loadUser } from '../../actions/actionsAuth';
import { CgHello } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { IoAddCircleOutline } from 'react-icons/io5';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';

const Home = ({
  loadUser,
	getCurrentUserProfile,
	deleteAccount,
	auth: { user },
	profile: { profile, loading },
}) => {
  useEffect(() => {
    loadUser();
    getCurrentUserProfile();
  }, [getCurrentUserProfile, loadUser]);

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <Fragment>
        {profile !== null ? (
              <div className="inPage">
              <div className="container-fluid">
                <div className="row justify-content-center bg-lightXXX">
                  <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-7 col-xxl-7 bg-lightXXX ">
                    <div className="my-4 text-center">
                      <h3 className="mb-4 p-0"><CgHello /> Welcome, {user && user.name}</h3>
                    </div>
                    <div className="row justify-content-center shadow bg-light" style={{borderRadius: 25}}>
                      
                      <div className="col-md-10 col-lg-7 col-xl-7 order-2 order-lg-1 ">
                        <form className="row p-4">
                          <div className="position-relative mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              id="phoneNumber" 
                              value={profile.phoneNumber}
                            />
                          </div>
                          <div className="position-relative mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              id="city" 
                              value={profile.city}
                            />
                          </div>
                          <div className="position-relative mb-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              id="gender" 
                              value={profile.gender}
                            />
                          </div>
                          <div className="position-relative mb-3">
                            <label htmlFor="status" className="form-label">Status</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              id="status" 
                              value={profile.status}
                            />
                          </div>
                          <div className="position-relative mb-3">
                            <label htmlFor="nickname" className="form-label">Nickname</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              id="nickname" 
                              value={profile.nickname}
                            />
                          </div>
                          
                          <div className="text-center mb-3 d-flex justify-content-center align-items-center gap-1">
                            <Link to="/edit-profile" className="btn btn-warning">
                              <FiEdit size={20} style ={{ paddingBottom: 4}} /> Edit Profile
                            </Link>
                            <button className="btn btn-danger" onClick={() => deleteAccount()}>
                              <RiDeleteBinLine size={20} style ={{ paddingBottom: 4}} />
                              Delete Account
                            </button>
                          </div>
                          
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-5 col-xl-5 row align-items-center order-1 order-lg-2">
                            <img src={user.avatar} className="img-fluid my-4" style={{width: 425}} alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ) : (
          <div className="d-grid gap-4 d-flex justify-content-center align-items-center height100VH">
            <div className="d-flex flex-column align-items-center">
              <h3 className="mb-4 p-0"><CgHello /> Welcome, {user.name}</h3>
              <img src={user.avatar} className="img-fluid mb-4" style={{width: 350}} alt=""/>
              <div className="d-grid gap-4 d-flex justify-content-center">
                <Link to="/create-profile" className="btn btn-primary">
                  <IoAddCircleOutline size={20} style ={{ paddingBottom: 4}} />
                  Create Profile
                </Link>
                <button className="btn btn-danger" onClick={() => deleteAccount()}>
                  <RiDeleteBinLine size={20} style ={{ paddingBottom: 4}} />
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    </div>

  );
};

Home.propTypes = {
	loadUser: PropTypes.func.isRequired,
	getCurrentUserProfile: PropTypes.func.isRequired,
	deleteAccount: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, {
	loadUser,
	getCurrentUserProfile,
	deleteAccount,
})(Home);