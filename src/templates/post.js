import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { PostHeader } from '../components/header';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const { place, regionHierarchy } = post.frontmatter;
  return (
    <Layout header={<PostHeader title={place} subtitle={regionHierarchy} />}>
      <div className="pure-grid">
        <Helmet title={`sando - ${place}`} />
        <div className="pure-u-1 pure-u-padding-one">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        path
        place
        regionHierarchy
      }
    }
  }
`;
