import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Gallery from '../components/post/gallery';
import { PostHeader } from '../components/header';
import PostMetadata from '../components/post/post-metadata';
import PostText from '../components/post/post-text';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const { imagePrefix, images, place, regionHierarchy } = post.frontmatter;
  return (
    <Layout header={<PostHeader title={place} subtitle={regionHierarchy} />}>
      <Helmet title={`sando - ${place}`} />
      <div className="pure-g pure-u-padding-one">
        <div className="pure-u-1 pure-u-m-2-5">
          <PostText html={post.html} />
          <PostMetadata />
        </div>
        <div className="pure-u-1 pure-u-m-3-5">
          <Gallery imagePrefix={imagePrefix} images={images} />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        country
        date
        excerpt
        heroImage
        imagePrefix
        images
        path
        place
        regionHierarchy
      }
    }
  }
`;
