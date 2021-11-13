import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/actionsProfiles';
import { MdOutlineAddToPhotos } from 'react-icons/md';

import { GrReturn } from 'react-icons/gr';

const createProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
		nickname: '',
		gender: '',
		status: '',
		phoneNumber: '',
		city: '',
	});

  const { phoneNumber, city, status, gender, nickname } = formData;

  const updateProfileHandler = (e) => 
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const createProfileHandler = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <div className='inPage'>
      <div className="container-fluid">
        <div className="row justify-content-center bg-light">
          <div className="col-12 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3 bg-light ">
            <div className="mb-3">
              <h3>Create Profile</h3>
            </div>
            <form 
              className="row p-4 shadow" 
              style={{borderRadius: 25}} 
              onSubmit={(e) => createProfileHandler(e)}
            >
              <div className="position-relative mb-3">
                <label htmlFor="nickname" className="form-label">Email</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="nickname" 
                  value={nickname}
                  onChange={(e) => updateProfileHandler(e)}
                  placeholder="Insert here ..." 
                  required
                />
              </div>
              <div className="position-relative mb-3">
                <label htmlFor="gender" class="form-label">Gender</label>
                <select 
                  class="form-select" 
                  id="gender"
                  value={gender}
                  onChange={(e) => updateProfileHandler(e)}
                  required
                >
                    <option selected disabled value="">Choose an option</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
              </div>
              <div className="position-relative mb-3">
                <label htmlFor="status" className="form-label">Status</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="status" 
                  value={status}
                  onChange={(e) => updateProfileHandler(e)}
                  placeholder="Insert here ..." 
                  required
                />
              </div>
              <div className="position-relative mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="city" 
                  value={city}
                  onChange={(e) => updateProfileHandler(e)}
                  placeholder="Insert here ..." 
                  required
                />
              </div>
              <div className="position-relative mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input 
                  type="number" 
                  className="form-control" 
                  id="phoneNumber" 
                  value={phoneNumber}
                  onChange={(e) => updateProfileHandler(e)}
                  placeholder="Insert here ..." 
                  required
                />
              </div>
              <div className="text-center mb-3">
                <button type="submit" className="btn btn-primary"><MdOutlineAddToPhotos size={20} style ={{ paddingBottom: 4}} />Submit</button>
                <Link to='/posts' className="btn btn-outline-primary btn-sm"><FaFileSignature size={20} style ={{ paddingBottom: 4}} />Return</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

CreateProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
