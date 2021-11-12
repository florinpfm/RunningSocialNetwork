import React from 'react';
import PropTypes from 'prop-types';
import MyRegisterImg from '../../data/register.jpg';

const PostInput = props => {
  return (
    <div className="border border-danger">
      <div className="container-fluid">
        <div className="row justify-content-center bg-light">
          <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-9 col-xxl-9 bg-light ">
            <div className="mb-3">
              <h3>Post Input - text</h3>
            </div>
            <div className="p-4 shadow" style={{borderRadius: 25}}>

              {/* Post exemple 1 */}
              <div>
                {/* Add text to Post */}
                <div className="bg-light p-2 border border-success">
                  <form className="row needs-validation"  novalidate >
                    <div className="position-relative mb-3">
                      <label for="title" className="form-label">Title</label>
                      <input type="text" className="form-control" id="title" placeholder="Insert here ..." required/>
                      <div className="valid-tooltip">Looks good!</div>
                      <div className="invalid-tooltip">Please provide a valid title</div>
                    </div>
                    <div className="position-relative mb-3">
                      <label for="contentPost" className="form-label">Post Content</label>
                      <textarea className="form-control" id="contentPost" placeholder="Insert here ..." required></textarea>
                      <div className="valid-tooltip">Looks good!</div>
                      <div className="invalid-tooltip">Please provide a valid post content</div>
                    </div>
                    <div className="mt-2 d-flex justify-content-center">
                      <button className="btn btn-primary btn-sm shadow-none" type="submit">Add Post</button>
                      <button className="btn btn-outline-primary btn-sm ms-1 shadow-none" type="button">Cancel</button>
                    </div>
                  </form>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

PostInput.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
};

export default PostInput;