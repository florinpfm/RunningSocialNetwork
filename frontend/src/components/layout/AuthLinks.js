import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { GoSignOut } from 'react-icons/go';
import { SiGooglemessages } from 'react-icons/si';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const AuthLinks = (props) => {
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
                <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'purple' })} to='/profile' className="nav-link border"><FaUser size={20} style ={{ paddingBottom: 4}} />Account</NavLink>
            </li>
            <li>
                <NavLink onClick={() => props.logout()} style={({ isActive }) => ({ color: isActive ? 'green' : 'purple' })} to='/indexA' className="nav-link border"><GoSignOut size={20} style ={{ paddingBottom: 4}} />Logout</NavLink>
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

AuthLinks.propTypes = {
  logout: PropTypes.object.isRequired,
}

export default connect(null, {logout})(AuthLinks);
