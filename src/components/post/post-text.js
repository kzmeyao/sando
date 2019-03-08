import React from 'react';
import './post-text.css';

const PostText = ({ html }) => (
  <div className="post-text" dangerouslySetInnerHTML={{ __html: html }} />
);

export default PostText;
