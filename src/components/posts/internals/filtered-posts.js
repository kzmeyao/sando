import React from 'react';

class FilteredPosts extends React.Component {
  render() {
    return (
      <div className="filtered-posts">
        <ul>{this.props.posts.map(post => post.place)}</ul>
      </div>
    );
  }
}

export default FilteredPosts;
