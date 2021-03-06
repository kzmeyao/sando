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
        name: 'posts',
        path: `${__dirname}/src/posts`,
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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Cardo:400,700', 'Lato:400', 'Newsreader:400,400i,700'],
        },
        // typekit: {
        //   id: process.env.ADOBE_FONTS_ID,
        // },
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
