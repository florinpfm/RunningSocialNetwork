import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { IoIosHome } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { GoSignIn } from 'react-icons/go';
import { GoSignOut } from 'react-icons/go';
import { FaFileSignature } from 'react-icons/fa';
import { SiGooglemessages, SiPytorchlightning } from 'react-icons/si';
import Logo from '../../data/logo.png';
import { connect } from 'mongoose';
import Spinner from './Spinner';

const Posts = (props) => {
    return (
        // asta e un card de fapt div-ul asta, pt o postare de la user
        <div className='container'>    
            {props.posts.map((post) => (
                <div key={post._id}>
                    <h4>{post.name}</h4>
                    <p>{post.text}</p>
                </div>
            ))}
        </div>
    );
};

{/* <Posts posts={} /> */} //asa arata componenta de fapt care sa o cream noi acasa


const Navbar = props => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log('Use effect', loading);
        axios.get('/api/posts').then(response => {
            setPosts(response.data);
        });
    }, []); //se poate folosi la refresh de postari

    console.log(posts);

    // let posts = fetch('/api/posts').then( (res) => res.json()).then((data) => console.log(data));
    // console.log(posts);
    return (
        <div className="border border-primary">
            {/* Navbar Bootstrap 5 */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* Brand text */}
                    <div className="d-flex align-items-center">
                        <img className="border" src={Logo} alt="" width="60" height="48"/>
                        <a className="navbar-brand border" href="#">NER's NET</a>
                    </div>
                    {/* Links */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li><a className="nav-link active border" aria-current="page" href="#"><IoIosHome size={20} style ={{ paddingBottom: 4}} />Home</a></li>
                            <li><a className="nav-link border" aria-current="page" href="#"><FaUser size={20} style ={{ paddingBottom: 4}} />Account</a></li>
                            <li><a className="nav-link border" aria-current="page" href="#"><GoSignIn size={20} style ={{ paddingBottom: 4}} />Login</a></li>
                            <li><a className="nav-link border" aria-current="page" href="#"><GoSignOut size={20} style ={{ paddingBottom: 4}} />Logout</a></li>
                            <li><a className="nav-link border" aria-current="page" href="#"><FaFileSignature size={20} style ={{ paddingBottom: 4}} />Register</a></li>
                            <li><a className="nav-link border" aria-current="page" href="#"><SiGooglemessages size={20} style ={{ paddingBottom: 4}} />Posts</a></li>
                        </ul>
                        {/* Search input field */}
                        <form className="d-flex ms-2">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className='container'>
                {/* <button className="btn btn-danger" onClick={() => setLoading(!loading)}>Get Posts</button> */}
                <button className="btn btn-danger" onClick={() => setLoading(!loading)}>Get Posts</button>
            </div>
            
            {loading ? <Spinner /> : <Posts posts={posts} />}

            {/* Buttons Register + Login */}
            <div className="d-grid gap-4 d-flex justify-content-center align-items-center centeredButtons">
                <button className="btn btn-primary px-3">Register</button>
                <button className="btn btn-primary px-4">Login</button>
            </div>
        </div>
    )
}

// Navbar.propTypes = {
//     auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//     auth: state.auth,
// });

// export default connect(mapStateToProps, {})(Navbar);
export default Navbar;
