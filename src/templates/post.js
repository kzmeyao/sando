import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { PostHeader } from '../components/header';
import PostMetadata from '../components/post/post-metadata';
import PostText from '../components/post/post-text';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const {
    date,
    photoGear,
    place,
    recommendations,
    regionHierarchy,
  } = post.frontmatter;
  return (
    <Layout
      header={
        <PostHeader
          title={place}
          subtitle={`${regionHierarchy} (${date.split('-')[0]})`}
        />
      }
    >
      <Helmet title={`${place} | sando`} />
      <div className="pt-4">
        <PostText post={post} />
        <PostMetadata
          date={date}
          photoGear={photoGear}
          recommendations={recommendations}
        />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
`;
