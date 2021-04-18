import React from 'react';
import { Link } from 'gatsby';
import LazyImage from '../../common/LazyImage';

const PostCard = ({ post }) => {
  const { excerpt, heroImage, path, place, regionHierarchy } = post;
  return (
    <div className="group">
      <Link className="no-underline text-grey-darkest" to={`${path}`}>
        <LazyImage relSrc={`/w_600/gallery/${heroImage}`} />
        <div className="group-hover:underline font-sans text-xs pt-3">
          {regionHierarchy.toUpperCase()}
        </div>
        <h2 className="font-heading font-semibold pt-1 text-2xl">{place}</h2>
        <p className="leading-normal pt-1">{excerpt}</p>
        <div className="font-sans group-hover:underline pt-2 text-xs text-grey-dark">
          READ MORE
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
