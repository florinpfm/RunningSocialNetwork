import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/actionsAuth';
import MyLoginImg from '../../images/login.jpg';
import { GoSignIn } from 'react-icons/go';
import { FaFileSignature } from 'react-icons/fa';
import { Link, Redirect } from 'react-router-dom';


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

  console.log('components Login.js--> the isAuthenticated is: (here it must be true)');
  console.log(isAuthenticated);

  return isAuthenticated ? (
    <Redirect to='/posts' />
  ) : (
    <div className='inPage'>
      <div className="container-fluid">
        <div className="row justify-content-center bg-lightXXX">
          <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-9 col-xxl-9 bg-lightXXX ">
            <div className="my-4 text-center">
              <h3>Login Form</h3>
            </div>
            <div className="row justify-content-center shadow bg-light" style={{borderRadius: 25}}>
              <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1 ">
                <form className="row p-4" onSubmit={(e) => loginHandler(e)}>
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
                      
                    >
                      <GoSignIn size={20} style ={{ paddingBottom: 4}} />Login
                    </button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center gap-1">
                    <button type="button" className="btn btn-outline-primary btn-sm">Reset Password</button>
                    <p className="text-center ms-auto mb-0">Or create an account</p>
                    <Link to='/register' className="btn btn-outline-primary btn-sm"><FaFileSignature size={20} style ={{ paddingBottom: 4}} />Register</Link>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-6 row align-items-center order-1 order-lg-2">
                <img src={MyLoginImg} className="img-fluid my-4" style={{width: 750}} alt=""/>
              </div>

            </div>



            
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