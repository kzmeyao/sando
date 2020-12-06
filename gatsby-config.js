module.exports = {
  siteMetadata: {
    author: 'Kevin Yao',
    description: '',
    title: 'sando',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: {
        features: ['IntersectionObserver'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'places',
        path: `${__dirname}/src/places`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // plugins: ['gatsby-plugin-catch-links', 'gatsby-plugin-react-helmet']
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#333333',
        theme_color: '#333333',
        display: 'minimal-ui',
        icon: 'src/images/sando-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['cardo:400,700', 'lato:400,400i,700'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-140891664-1',
        head: false,
        anonymize: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
