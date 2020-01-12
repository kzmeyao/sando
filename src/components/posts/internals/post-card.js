import React from 'react';
import { Link } from 'gatsby';

const PostCard = ({ post }) => {
  const { excerpt, heroImage, path, place, regionHierarchy } = post;
  return (
    <div className="group">
      <Link className="no-underline text-grey-darkest" to={`${path}`}>
        <img
          src={`https://res.cloudinary.com/sando/image/upload/w_600/${heroImage}`}
        />
        <div className="group-hover:underline text-xxs pt-3">
          {regionHierarchy.toUpperCase()}
        </div>
        <h2 className="font-heading font-semibold pt-1 text-2xl">{place}</h2>
        <p className="leading-normal pt-1 text-sm">{excerpt}</p>
        <div className="italic group-hover:underline pt-2 text-xs text-grey-dark">
          Read more
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
