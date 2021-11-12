import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { FcSportsMode } from 'react-icons/fc';
import Logo from '../../data/logo.png';
import AuthLinks from './AuthLinks';
import VisitorsLinks from './VisitorsLinks';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = (props) => {
    return (
        <div className="borderXXX border-primaryXXX">
            {/* Navbar Bootstrap 5 */}
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <div className="container-fluid">
                    {/* Brand text */}
                    <div className="d-flex align-items-center">
                        <img className="border" src={Logo} alt="" width="60" height="48"/>
                        <Link to='/index' className="navbar-brand border"><FcSportsMode className="d-none"/>NER's NET</Link>
                    </div>
                    {props.auth.isAuthenticated ? <AuthLinks /> : <VisitorsLinks />}
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, {logout})(Navbar);
