import React from 'react';
import PostCard from './post-card';
import './filtered-posts.css';

const FilteredPosts = ({ posts }) => (
  <div className="filtered-posts">
    <ul className="pure-g">
      {posts.map(post => (
        <li className="pure-u-1-2" key={post.place}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  </div>
);

export default FilteredPosts;
