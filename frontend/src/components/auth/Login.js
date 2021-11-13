import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/actionsAuth';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { GoSignIn } from 'react-icons/go';
import { FaFileSignature } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const loginHandler = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return isAuthenticated ? (
    <Router>
      <Routes>
        {/* redirectionare spre /posts */}
        <Route element={<Navigate replace to='/posts' /> } />
      </Routes>
    </Router>
  ) : (
    <div className='inPage'>
      <div className="container-fluid">
        <div className="row justify-content-center bg-light">
          <div className="col-12 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3 bg-light ">
            <div className="mb-3">
              <h3>Login Form</h3>
            </div>
            <form className="row p-4 shadow" style={{borderRadius: 25}} >
              <div className="position-relative mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  value={email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Insert here ..." 
                  required
                />
              </div>
              <div className="position-relative mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  value={password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Insert here ..." 
                  required
                />
              </div>
              <div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe"/>
                  <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                </div>
              </div>
              <div className="text-center mb-3">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  onSubmit={(e) => loginHandler(e)}
                >
                  <GoSignIn size={20} style ={{ paddingBottom: 4}} />Login
                </button>
              </div>
              <div className="d-flex justify-content-between align-items-center gap-1">
                <button type="button" className="btn btn-outline-primary btn-sm">Reset Password</button>
                <p className="text-center ms-auto mb-0">Or create an account</p>
                <NavLink to='/register' className="btn btn-outline-primary btn-sm"><FaFileSignature size={20} style ={{ paddingBottom: 4}} />Register</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { login })(Login);