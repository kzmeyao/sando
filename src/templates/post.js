import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <div className='blog-post-container'>
        <Helmet title={`Your Blog Name - ${post.frontmatter.place}`} />
        <div className='blog-post'>
          <h1>{post.frontmatter.place}</h1>
          <div
            className='blog-post-content'
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
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
        path
        place
      }
    }
  }
`;
