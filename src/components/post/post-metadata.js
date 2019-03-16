import React, { useState } from 'react';
import './post-metadata.css';

const PostMetadata = ({ date, photoGear }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };

  return (
    <div className="post-metadata">
      <dl>
        <dt>Year visited</dt>
        <dd>{date.split('-')[0]}</dd>
        <dt>Photo gear used</dt>
        <dd>{photoGear}</dd>
        <dt>Share</dt>
        <dd>
          <div onClick={copyToClipboard}>
            {copied ? 'Copied!' : <span className="copy-link">Copy URL</span>}
          </div>
        </dd>
      </dl>
    </div>
  );
};

export default PostMetadata;
