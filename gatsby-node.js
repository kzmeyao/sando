const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/post.js');
  const postsTemplate = path.resolve('src/templates/posts.js');

  return graphql(`
    {
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
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;
    const years = new Set();
    const countries = new Set();

    posts.forEach((edge) => {
      const { country, date, path } = edge.node.frontmatter;
      countries.add(
        country
          .toLowerCase()
          .split(' ')
          .join('-')
          .replace(/[^a-z\-]+/g, '')
      );
      years.add(date.split('-')[0]);
      createPage({
        path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      });
    });

    [...years].forEach((year) => {
      createPage({
        path: `/years/${year}/`,
        component: postsTemplate,
        context: {
          filterType: 'YEARS',
          filter: year,
        },
      });
    });

    [...countries].forEach((country) => {
      createPage({
        path: `/countries/${country}/`,
        component: postsTemplate,
        context: {
          filterType: 'COUNTRIES',
          filter: country,
        },
      });
    });
  });
};
