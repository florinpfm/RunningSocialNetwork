import React from 'react';
import PropTypes from 'prop-types';
import Alert from '../layout/Alert';


const Login = (props) => {
  return (
    <div className='inPage'>
      <div className="container-fluid">
        <div className="row justify-content-center bg-light">
          <div className="col-12 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3 bg-light ">
            <div className="mb-3">
              <h3>Login Form</h3>
            </div>
            <form className="row p-4 needs-validation shadow" style={{borderRadius: 25}} novalidate >
              <div className="position-relative mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Insert here ..." required/>
                <div className="valid-tooltip">Looks good!</div>
                <div className="invalid-tooltip">Please provide a valid email</div>
              </div>
              <div className="position-relative mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Insert here ..." required/>
                <div className="valid-tooltip">Looks good!</div>
                <div className="invalid-tooltip">Please provide a valid password</div>
              </div>
              <div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe"/>
                  <label className="form-check-label" for="rememberMe">Remember Me</label>
                </div>
              </div>
              <div className="text-center mb-3">
                  <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <div className="d-flex justify-content-between align-items-center gap-1">
                <button type="button" className="btn btn-outline-primary btn-sm">Reset Password</button>
                <p className="text-center ms-auto mb-0">Or create an account</p>
                <button type="button" className="btn btn-outline-primary btn-sm">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;