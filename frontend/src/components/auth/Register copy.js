import React from 'react';
import PropTypes from 'prop-types';
import Alert from '../layout/Alert';
import MyRegisterImg from '../../data/register.jpg';

const Register = props => {
  return (
    <div className="border border-danger">
      <div className="container-fluid">
        <div className="row justify-content-center bg-light">
          <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-9 col-xxl-9 bg-light " >
            <div className="mb-3">
              <h3>Register Form</h3>
            </div>
            <div className="row justify-content-center shadow" style={{borderRadius: 25}}>
              <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1 " >

                <form className="row p-4 needs-validation"  novalidate >
                  <div className="position-relative mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Insert here ..." required/>
                    <div className="valid-tooltip">Looks good!</div>
                    <div className="invalid-tooltip">Please provide a valid name</div>
                  </div>
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
                  <div className="position-relative mb-3">
                    <label for="repetPassword" className="form-label">Repet Password</label>
                    <input type="password" className="form-control" id="repetPassword" placeholder="Insert here ..." required/>
                    <div className="valid-tooltip">Looks good!</div>
                    <div className="invalid-tooltip">Please provide a valid password</div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-3">
                    <input className="form-check-input me-2" type="checkbox" id="form2Example3c"/>
                    <label className="form-check-label" for="form2Example3">I agree all statements in <a href="#!">Terms of service</a></label>
                  </div>
                  <div className="text-center mb-3">
                      <button type="submit" className="btn btn-primary">Register</button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-6 row align-items-center order-1 order-lg-2">
                <img src={MyRegisterImg} className="img-fluid" style={{width: 750}} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Register.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
};

export default Register;