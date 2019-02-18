import React from 'react';
import { Link } from 'gatsby';
import Image from '../../image';
import './post-card.css';

const PostCard = ({ post }) => {
  const { path, place, regionHierarchy } = post;
  return (
    <div>
      <Link to={path}>
        <Image />
      </Link>
      <div className="subtitle">{regionHierarchy.toUpperCase()}</div>
      <h4>{place}</h4>
    </div>
  );
};

export default PostCard;
