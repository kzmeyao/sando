import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Posts from '../components/posts';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexPageQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                country
                date
                path
                place
                regionHierarchy
              }
            }
          }
        }
      }
    `}
    render={data => {
      const posts = data.allMarkdownRemark.edges.map(
        edge => edge.node.frontmatter
      );
      return (
        <Layout>
          <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
          <Posts posts={posts} />
        </Layout>
      );
    }}
  />
);

export default IndexPage;
