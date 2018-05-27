module.exports = {
  siteMetadata: {
    title: 'Virginia Lovejoy Allen',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, // you can use multiple source-filesystem instances
        path: `${__dirname}/src/img/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
