import React from 'react';
import PropTypes from 'prop-types';
import MyRegisterImg from '../../data/register.jpg';

const Comment = props => {
  return (
    <div className="border border-danger">
      <div className="container-fluid">
        <div className="row justify-content-center bg-light">
          <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-9 col-xxl-9 bg-light ">
            <div className="mb-3">
              <h3>Simple Comment not logged in</h3>
            </div>
            <div className="p-4 shadow" style={{borderRadius: 25}}>

              {/* Comment exemple 1 */}
              <div>
                {/* Comment content displayed */}
                <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center align-items-md-stretch gap-2 border border-danger p-2">
                  <div className="d-flex flex-column justify-content-center align-items-center border border-primary" style={{width: 40}}>
                    <img src={MyRegisterImg} className="rounded-circle m-0 border border-primary" width="40" height="40" alt="..."/>
                  </div>
                  <div className="d-flex flex-column justify-content-evenly align-items-start border border-success align-self-stretch">
                    <p className="m-0 p-0 border border-primary fw-bold py-2">Florin Marius</p>
                    <p className="m-0 p-0 border border-primary">Thi natural lead-in to additional content. This content is a little bit longer. lorem Lorem Lorem lorem ipsum lush dlkhf lksdhf lkdjshfkldjshfkdjshfkldshfdklshf j jv ;vjh;kvjh ;kjsh ;ksjh ;shf ;ksdjhf k;jv ;kjvd;skv d;skvjd;askvj ;kjsdvn</p>
                    <div className="my-2">
                      <p className="m-0 p-0 border border-primary">icons fontawesome and buttons</p>
                    </div>
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

Comment.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
};

export default Comment;