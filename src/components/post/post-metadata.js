import React, { useState } from 'react';

const dtClass = 'font-bold mt-6 mb-2';

const PostMetadata = ({ date, photoGear, recommendations }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };

  return (
    <div className="border-t border-solid border-grey-light md:sticky pin-t">
      <dl className="text-sm text-grey-darkest mb-8">
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
