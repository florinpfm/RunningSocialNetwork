import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Post from './Post';
import { getPosts } from '../../actions/actionsPosts';
import { loadUser } from '../../actions/actionsAuth';
import PostInput from './PostInput';

const Posts = ({ auth, loadUser, getPosts, posts: { posts, loading } }) => {
  useEffect(() => {
    console.log('component Posts--> the function loadUser() is executed is auth.isauthenticated is true: ');
    console.log(auth.isAuthenticated);
    if (auth.isAuthenticated) loadUser(); //aici se da comanda de executare LOAD_USER pt login si register 
    getPosts();
  }, []);
  // added here in the [] as a TEST the auth.isAuthenticated

  console.log('here are the posts received: ');
  console.log(posts);
    
  return loading ? (
    <Spinner />
  ) : (
    <div className='inPage'>
      <div className="container-fluid">
        <div className="row justify-content-center bg-lightXXX">
          <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-9 col-xxl-9 bg-lightXXX ">
            <div className="my-4 text-center">
              <h3>Posts Page</h3>
            </div>
            <div className="p-4 shadow bg-light" style={{borderRadius: 25}}>

              {/* Post input fields when adding a new post */}
              <PostInput />

              {/* each Post is build one after the other here */}
              {posts.map((post) => ( 
                <Post key={post._id} post={post} />
                
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Posts.propTypes = {
  auth: PropTypes.object.isRequired,
	loadUser: PropTypes.func.isRequired,
	getPosts: PropTypes.func.isRequired,
	posts: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	posts: state.posts,
	auth: state.auth,
});

export default connect(mapStateToProps, { loadUser, getPosts })(Posts);
