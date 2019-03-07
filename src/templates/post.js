import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Gallery from '../components/post/gallery';
import { PostHeader } from '../components/header';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const { imagePrefix, images, place, regionHierarchy } = post.frontmatter;
  return (
    <Layout header={<PostHeader title={place} subtitle={regionHierarchy} />}>
      <div className="pure-grid">
        <Helmet title={`sando - ${place}`} />
        <div className="pure-u-1 pure-u-padding-one">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <Gallery imagePrefix={imagePrefix} images={images} />
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
