import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FcSportsMode } from 'react-icons/fc';
import { IoIosHome } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { GoSignIn } from 'react-icons/go';
import { GoSignOut } from 'react-icons/go';
import { FaFileSignature } from 'react-icons/fa';
import { SiGooglemessages } from 'react-icons/si';


const Navbar = props => {
    let posts = fetch('/api/posts').then( (res) => res.json()).then((data) => console.log(data));
    // console.log(posts);
    return (
        <div>
            <nav className="navbar bg-primaryf">
                <h1><FcSportsMode />Runner'sNet</h1>
                <div className="alignForNavbar logo bg-successf">
                    <p className="bg-lightf m-0"><FcSportsMode />Runner'sNet</p>
                </div>
                <ul className="mb-0">
                    <li className="alignForNavbar bg-lightf"><IoIosHome />Home</li>
                    <li className="alignForNavbar bg-lightf"><FaUser />Account</li>
                    <li className="alignForNavbar bg-lightf"><GoSignIn />Login</li>
                    <li className="alignForNavbar bg-lightf"><GoSignOut />Logout</li>
                    <li className="alignForNavbar bg-lightf"><FaFileSignature />Register</li>
                    <li className="alignForNavbar bg-lightf"><SiGooglemessages />Posts</li>
                </ul>
            </nav>
            <div className="d-grid gap-5 d-flex justify-content-center align-items-center centeredButtons">
                <button className="btn btn-primary px-3">Register</button>
                <button className="btn btn-primary px-4">Login</button>
            </div>
        </div>
    )
}

Navbar.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
};

export default Navbar;
