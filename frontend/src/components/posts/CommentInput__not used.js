import React from 'react';
import PropTypes from 'prop-types';
import MyRegisterImg from '../../data/register.jpg';

const CommentInput = props => {
  return (
    <div className="border border-danger">
      <div className="container-fluid">
        <div className="row justify-content-center bg-light">
          <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-9 col-xxl-9 bg-light ">
            <div className="mb-3">
              <h3>Comment Input - text</h3>
            </div>
            <div className="p-4 shadow" style={{borderRadius: 25}}>

              {/* Comment exemple 1 */}
              <div>
                {/* Add text to Comment */}
                <div className="bg-light p-2 border border-success">
                  <div className="d-flex flex-row align-items-start border border-primary width100Percent">
                    <img className="rounded-circle" src={MyRegisterImg} width="40" alt=''/>
                    <div className=" border border-danger ms-2 width100Percent">
                      <p className="text-center d-inline-block m-0 p-0 border border-success">Florin Marius</p>
                      <textarea className="form-control shadow-none textareaXXX border border-success width100Percent"></textarea>
                    </div>
                    
                  </div>
                  <div className="mt-2 d-flex justify-content-center">
                    <button className="btn btn-primary btn-sm shadow-none" type="button">Add Comment</button>
                    <button className="btn btn-outline-primary btn-sm ms-1 shadow-none" type="button">Cancel</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CommentInput.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
};

export default CommentInput;