import React from 'react';
import { Link } from 'gatsby';
import Image from '../../image';

const PostCard = ({ post }) => {
  const { path, place, regionHierarchy } = post;
  return (
    <div>
      <Link to={path}>
        <Image />
      </Link>
      <small>{regionHierarchy.toUpperCase()}</small>
      <h3>{place}</h3>
    </div>
  );
};

export default PostCard;
