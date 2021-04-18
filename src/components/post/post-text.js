import React from 'react';

const PostText = ({ html }) => (
  <div
    className="post-text text-lg"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

export default PostText;
