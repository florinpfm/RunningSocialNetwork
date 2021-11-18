import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, unLike, updatePost, deletePost } from '../../actions/actionsPosts';
import { BiLike, BiDislike } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';



const Post = ({
  addLike,
  unLike,
  updatePost,
  deletePost,
  auth,
  post: {_id, title, text, name, avatar, user, likes, comments, date},
}) => {
  const [newTitle, setTitle] = useState(title);
	const [newText, setText] = useState(text);
	const [isEditing, setEditing] = useState(false);

  return (
    // Post content displayed 
    <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center align-items-md-stretch gap-3 border border-danger">
      <div className="d-flex flex-column justify-content-center align-items-center border border-primary m-3" style={{width: 150}}>
        <p className="text-center d-inline-block m-0 p-0">{name}</p>
        <img src={avatar} className="rounded-circle m-0 border border-primary" width="150" height="150" alt="..."/>
      </div>

      <div>
        
        {isEditing ? (
          // the post input fields for title + text
          <Fragment>
            {' '}
            <div className="bg-light p-2 border border-success">
              <form 
                className="row"
                onSubmit={(e) => {
                  e.preventDefault();
                  updatePost(_id, { title: newTitle, text: newText });
                  // clear the form
                  setEditing(!isEditing);
                }}
              >
                <div className="position-relative mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    value={newTitle}
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
                    value={newText}
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
          </Fragment>
        ) : (
          // the post title and text after post finished editing
          <Fragment>
            <div className="d-flex flex-column justify-content-evenly align-items-start border border-success align-self-stretch">
              <p className="m-0 p-0 border border-primary fw-bold py-2">{newTitle}</p>
              <p className="m-0 p-0 border border-primary">{newText}</p>
              <div className="d-flex flex-content-end my-2">
                <p className="m-0 p-0 border border-primary">Created on <Moment format="YYYY/MM/DD HH:mm">{date}</Moment></p>
              </div>
            </div>
          </Fragment>
        )}

        {auth.isAuthenticated && !auth.loading && (
          // buttons for Like, unLike, 
          <Fragment>
            <button
            type="button"
            className="btn btn-light"
            onClick={() => addLike(_id)}
          >
            <BiLike />
            <span>
              {likes.length > 0 && <span>{likes.length}</span>}
            </span>
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => unLike(_id)}
          >
            <BiDislike />
          </button>

            {user === auth.user?._id && (
              <Fragment>
                <button
                  onClick={(e) => setEditing(!isEditing)}
                  type="button"
                  className="btn btn-primary"
                >
                  <FiEdit />
                  Edit
                </button>

                <button
                  onClick={() => deletePost(_id)}
                  type="button"
                  className="btn btn-danger"
                >
                  <MdDeleteForever />
                  Delete
                </button>
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
    </div>
  )
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  unLike: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, {addLike, unLike, updatePost, deletePost})(Post);