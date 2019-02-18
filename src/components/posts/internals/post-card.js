import React from 'react';
import { Link } from 'gatsby';
import Image from '../../image';
import './post-card.css';

const PostCard = ({ post }) => {
  const { excerpt, path, place, regionHierarchy } = post;
  return (
    <div className="post-card">
      <Link to={path}>
        <Image />
      </Link>
      <div className="subtitle">{regionHierarchy.toUpperCase()}</div>
      <h3>{place}</h3>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostCard;
