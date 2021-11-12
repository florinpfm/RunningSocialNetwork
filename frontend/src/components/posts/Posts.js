import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyRegisterImg from '../../images/register.jpg';

const Posts = (props) => {
  return (
    <div className='inPage'>
      <div className="container-fluid">
        <div className="row justify-content-center bg-light">
          <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-9 col-xxl-9 bg-light ">
            <div className="mb-3">
              <h3>Posts Page (not logged in)</h3>
            </div>
            <div className="p-4 shadow" style={{borderRadius: 25}}>

              {/* {props.posts.map((post) => ( */}
                {/* // aici pun de fapt componenta <Post /> */}
              {/* ))} */}

              {/* Post exemple 1 */}
              <div>
                {/* Post content displayed */}
                <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center align-items-md-stretch gap-3 border border-danger">
                  <div className="d-flex flex-column justify-content-center align-items-center border border-primary m-3" style={{width: 150}}>
                    <p className="text-center d-inline-block m-0 p-0">Florin Marius</p>
                    <img src={MyRegisterImg} className="rounded-circle m-0 border border-primary" width="150" height="150" alt="..."/>
                  </div>
                  <div className="d-flex flex-column justify-content-evenly align-items-start border border-success align-self-stretch">
                    <p className="m-0 p-0 border border-primary fw-bold py-2">Card title</p>
                    <p className="m-0 p-0 border border-primary">Thi natural lead-in to additional content. This content is a little bit longer. lorem Lorem Lorem lorem ipsum lush dlkhf lksdhf lkdjshfkldjshfkdjshfkldshfdklshf j jv ;vjh;kvjh ;kjsh ;ksjh ;shf ;ksdjhf k;jv ;kjvd;skv d;skvjd;askvj ;kjsdv ;kdjsv ;ksjv ;kjsdv ;kjdsv ;kjsdv dksjv ;lkdjshfkldjshfkdjshfkldshfdklshf j jv ;vjh;kvjh ;kjsh ;ksjh ;shf ;ksdjhf k;jv ;kjvd;skv d;skvjd;askvj ;kjsdv ;kdjsv ;ksjv ;kjsdv ;kjdsv ;kjsdv dksjv ;kjvasn ;kasj v;dksjvn ;aksvjn ;skjvn; skjnv;ks v;sdvn ;dks vn;ksvn ;k;s nvkdjv k vdjnv ksd vnks vkvs nkjd nn jdnsjv a;h ruhfrhnv ;jvn ;kljsnv;skjv n</p>
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

export default Posts;
