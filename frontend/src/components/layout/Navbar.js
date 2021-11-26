import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { FcSportsMode } from 'react-icons/fc';
import Logo from '../../images/logo.png';
import AuthLinks from './AuthLinks';
import VisitorsLinks from './VisitorsLinks';
import { connect } from 'react-redux';
import { logout } from '../../actions/actionsAuth';
import Spinner from './Spinner';
import Alert from './Alert';

const Navbar = ({auth: { isAuthenticated, loading, user }, logout }) => {
    if(loading) {
        return <Spinner />;
    }

    return (
        <div className="borderXXX border-primaryXXX">
            {/* Navbar Bootstrap 5 */}
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light navbar-customclassXXX">
                <div className="container-fluid">
                    {/* Brand text */}
                    <div className="d-flex align-items-center">
                        <img className="border" src={Logo} alt="" width="60" height="48"/>
                        <Link to='/' className="navbar-brand border"><FcSportsMode className="d-none"/>NER's NET</Link>
                        {isAuthenticated ? (
                            <div className="d-flex flex-align-center align-items-center gap-1">
                                <img className="rounded-circle ms-5 p-0" src={user && user.avatar} alt='avatar' width="35" height="35" />
                                <p className="m-0 p-0 text-dark fw-bold">{user && user.name}</p>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                    
                    {isAuthenticated ? <AuthLinks /> : <VisitorsLinks />}
                </div>
            </nav>
            <Alert />
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
