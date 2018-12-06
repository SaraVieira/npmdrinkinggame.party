var proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: 'The NPM drinking game',
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/beer.png',
      },
    },
  ],
}
