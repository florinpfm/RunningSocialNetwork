import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/actionsPosts';

const PostInput = ({ auth, addPost }) => {
  const [title, setTitle] = useState('');
	const [text, setText] = useState('');

  return (
    <Fragment>
      {auth.isAuthenticated && !auth.loading && (
        <div className="bg-light p-2 border border-success">
          <form 
            className="row"
            onSubmit={(e) => {
              e.preventDefault();
              addPost({ title, text });
              // clear the form
              setTitle('');
              setText('');
            }}
          >
            <div className="position-relative mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input 
                type="text" 
                className="form-control" 
                id="title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Insert here ..." 
                required
              />
            </div>
            <div className="position-relative mb-3">
              <label htmlFor="contentPost" className="form-label">Post Content</label>
              <textarea 
                className="form-control" 
                id="contentPost" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Insert here ..." 
                required
              ></textarea>
            </div>
            <div className="mt-2 d-flex justify-content-center">
              <button className="btn btn-primary btn-sm shadow-none" type="submit">Add Post</button>
              <button className="btn btn-outline-primary btn-sm ms-1 shadow-none" type="button">Cancel</button>
            </div>
          </form>
        </div>
      )}
    </Fragment>
  );
};

PostInput.propTypes = {
    addPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { addPost })(PostInput);