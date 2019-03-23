import React from 'react';
import PostCard from './post-card';

const FilteredPosts = ({ posts }) => (
  <div className="filtered-posts">
    <ul className="flex flex-wrap justify-center md:justify-start list-reset pt-5">
      {posts.map(post => (
        <li className="w-full md:w-1/2 mb-6 max-w-sm" key={post.place}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  </div>
);

export default FilteredPosts;
