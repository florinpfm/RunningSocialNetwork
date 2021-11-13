import React from 'react';
import { useParams } from 'react-router-dom';

// was supposed to be used as Links to each post in the welcome page/posts page

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

