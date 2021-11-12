import React from 'react';
import { useParams } from 'react-router-dom';


const PostDetails = (props) => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Post details for post {params.postId}</h1>
    </div>
  )
}

export default PostDetails;

