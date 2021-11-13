import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Post from './Post';
import { getPosts } from '../../actions/actionsPosts';
import { loadUser } from '../../actions/actionsAuth';
import PostInput from './PostInput';

const Posts = ({ auth, loadUser, getPosts, posts2: { posts, loading } }) => {
  useEffect(() => {
    if (auth.isAuthenticated) loadUser();
    getPosts();
  }, [getPosts, loadUser]);
    
  return loading ? (
    <Spinner />
  ) : (
    <div className='inPage'>
      <div className="container-fluid">
        <div className="row justify-content-center bg-light">
          <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-9 col-xxl-9 bg-light ">
            <div className="mb-3">
              <h3>Posts Page (not logged in)</h3>
            </div>
            <div className="p-4 shadow" style={{borderRadius: 25}}>

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
	posts2: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	posts2: state.posts,
	auth: state.auth,
});

export default connect(mapStateToProps, { loadUser, getPosts })(Posts);
