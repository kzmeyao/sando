import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
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
          <SEO title='Home' keywords={['gatsby', 'application', 'react']} />
          {posts.map(post => {
            const { path, place } = post;
            return (
              <Link key={path} to={path}>
                {place}
              </Link>
            );
          })}
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <Posts posts={posts} />
          <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
            <Image />
          </div>
          <Link to='/page-2/'>Go to page 2</Link>
        </Layout>
      );
    }}
  />
);

export default IndexPage;
