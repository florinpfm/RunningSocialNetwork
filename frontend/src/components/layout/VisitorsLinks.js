import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import { GoSignIn } from 'react-icons/go';
import { FaFileSignature } from 'react-icons/fa';
import { SiGooglemessages } from 'react-icons/si';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const VisitorsLinks = () => {
  return (
    <div>
      {/* Links */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                  <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'purple' })} to='/index' className="nav-link border"><IoIosHome size={20} style ={{ paddingBottom: 4}} />Home</NavLink>
              </li>
              <li>
                  <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'purple' })} to='/login' className="nav-link border"><GoSignIn size={20} style ={{ paddingBottom: 4}} />Login</NavLink>
              </li>
              <li>
                  <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'purple' })} to='/register' className="nav-link border"><FaFileSignature size={20} style ={{ paddingBottom: 4}} />Register</NavLink>
              </li>
              <li>
                  <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'purple' })} to='/posts' className="nav-link border"><SiGooglemessages size={20} style ={{ paddingBottom: 4}} />Posts</NavLink>
              </li>
          </ul>
          {/* Search input field */}
          <form className="d-flex ms-2">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
      </div>
    </div>
  )
}

export default VisitorsLinks;