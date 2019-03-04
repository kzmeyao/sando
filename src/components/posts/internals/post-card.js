import React from 'react';
import { Link } from 'gatsby';
import './post-card.css';

const PostCard = ({ post }) => {
  const { excerpt, heroImage, path, place, regionHierarchy } = post;
  return (
    <div className="post-card">
      <Link to={path}>
        <>
          <img
            src={`https://res.cloudinary.com/sando/image/upload/w_600/${heroImage}`}
          />
          <div className="subtitle">{regionHierarchy.toUpperCase()}</div>
          <h3>{place}</h3>
          <p>{excerpt}</p>
          <div className="read-more" to={path}>
            Read more
          </div>
        </>
      </Link>
    </div>
  );
};

export default PostCard;
