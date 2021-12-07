import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoSignIn } from 'react-icons/go';
import { FaFileSignature } from 'react-icons/fa';
import { SiGooglemessages } from 'react-icons/si';

const VisitorsLinks = () => {
  return (
    <div>
      {/* Links */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          
              <li>
                  <NavLink to='/login' className="nav-link borderXXX"><GoSignIn size={20} style ={{ paddingBottom: 4}} />Login</NavLink>
              </li>
              <li>
                  <NavLink to='/register' className="nav-link borderXXX"><FaFileSignature size={20} style ={{ paddingBottom: 4}} />Register</NavLink>
              </li>
              <li>
                  <NavLink to='/posts' className="nav-link borderXXX"><SiGooglemessages size={20} style ={{ paddingBottom: 4}} />Posts</NavLink>
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