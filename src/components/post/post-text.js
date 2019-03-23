import React from 'react';

const PostText = ({ html }) => (
  <div
    className="post-text text-sm"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

export default PostText;
