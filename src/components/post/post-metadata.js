import React from 'react';
import './post-metadata.css';

const PostMetadata = ({ date, photoGear }) => (
  <div className="post-metadata">
    <dl>
      <dt>Year visited</dt>
      <dd>{date.split('-')[0]}</dd>
      <dt>Photo gear used</dt>
      <dd>{photoGear}</dd>
      <dt>Share</dt>
      <dd>Twitter, Facebook, Copy URL</dd>
    </dl>
  </div>
);

export default PostMetadata;
