import React from 'react';
import { graphql } from 'gatsby';

import { HomeHeader } from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Posts from '../components/posts';

export default function Template({ pageContext, data }) {
  const posts = data.allMarkdownRemark.edges.map(
    (edge) => edge.node.frontmatter
  );
  return (
    <Layout header={<HomeHeader title="sando" />}>
      <SEO title="Home" keywords={['sando']} />
      <Posts {...pageContext} posts={posts} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            country
            date
            excerpt
            heroImage
            imagePrefix
            images2 {
              file
              alt
              caption
            }
            path
            photoGear
            place
            recommendations
            regionHierarchy
          }
        }
      }
    }
  }
`;
