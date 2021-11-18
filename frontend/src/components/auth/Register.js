import React, { useState  } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/actionsAlert';
import { register } from '../../actions/actionsAuth';
import MyRegisterImg from '../../images/register.jpg';
import { GoSignIn } from 'react-icons/go';
import { FaFileSignature } from 'react-icons/fa';
import { Link, Redirect } from 'react-router-dom';


const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmationPassword:'',
  });

  const { name, email, password, confirmationPassword } = formData;
  console.log('001 POST registration the initial form data are: ');
  console.log(formData);
  const registerHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmationPassword) {
      setAlert('001 POST registration the Passwords are not the same', 'danger', 3000);
      console.log('001 POST registration the password are not the same');
    } else {
      register({ name, email, password });
      console.log('001 POST registration the passwords match !!!');
      console.log(name);
      console.log(email);
      console.log(password);
    }
  }

  console.log('001 POST registration the var isAuthenticated is: ' + isAuthenticated);

  return isAuthenticated ? (
    <Redirect to='/posts' />
  ) : (
    <div className='inPage'>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center bg-successXXX">
          <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-9 col-xxl-9 bg-lightXXX " >
            <div className="my-4 text-center">
              <h3>Register Form</h3>
            </div>
            <div className="row justify-content-center shadow bg-light" style={{borderRadius: 25}}>
              <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1 " >
                <form className="row p-4" onSubmit={(e) => registerHandler(e)}>
                  <div className="position-relative mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      value={name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      placeholder="Insert here ..." 
                      required
                    />
                  </div>
                  <div className="position-relative mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      value={email}
                      onChange={(e) => setFormData({...formData, email: e.target.value })}
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
                  <div className="position-relative mb-3">
                    <label htmlFor="repetPassword" className="form-label">Repet Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="repetPassword" 
                      value={confirmationPassword}
                      onChange={(e) => setFormData({...formData, confirmationPassword: e.target.value })}
                      placeholder="Insert here ..." 
                      required
                    />
                  </div>
                  <div className="form-check d-flex justify-content-center mb-3">
                    <input className="form-check-input me-2" type="checkbox" id="form2Example3c"/>
                    <label className="form-check-label" htmlFor="form2Example3">I agree all statements in <a href="#!">Terms of service</a></label>
                  </div>
                  <div className="text-center mb-3">
                      <button 
                        type="submit" 
                        className="btn btn-primary"
                        
                      >
                        <FaFileSignature size={20} style ={{ paddingBottom: 4}} />Register
                      </button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center gap-1">
                    <p className="text-center ms-auto mb-0">Already done the registration ?</p>
                    <Link to='/login' className="btn btn-outline-primary btn-sm"><GoSignIn size={20} style ={{ paddingBottom: 4}} />Login</Link>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-6 row align-items-center order-1 order-lg-2">
                <img src={MyRegisterImg} className="img-fluid my-4" style={{width: 750}} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {setAlert, register})(Register);