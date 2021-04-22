import React, { useState } from 'react';

const dtClass = 'font-bold mt-6';

const PostMetadata = ({ date, photoGear, recommendations }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };

  return (
    <div className="border-t border-b border-solid border-grey-lighter my-8 pb-6 bg-tan">
      <dl className="text-center text-grey-darkest">
        {recommendations && (
          <>
            <dt className={dtClass}>Recommendations</dt>
            <dd>{recommendations}</dd>
          </>
        )}
        <dt className={dtClass}>Year visited</dt>
        <dd>{date.split('-')[0]}</dd>
        <dt className={dtClass}>Photo gear used</dt>
        <dd>{photoGear}</dd>
        <dt className={dtClass}>Share</dt>
        <dd>
          <div onClick={copyToClipboard}>
            {copied ? (
              'Copied!'
            ) : (
              <span className="cursor-pointer underline">Copy URL</span>
            )}
          </div>
        </dd>
      </dl>
    </div>
  );
};

export default PostMetadata;
