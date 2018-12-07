module.exports = {
  siteMetadata: {
    title: 'The NPM drinking game'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The NPM drinking game`,
        short_name: `NPM drinking game`,
        start_url: `/`,
        background_color: `#212529`,
        theme_color: `#212529`,
        display: `minimal-ui`,
        icon: `./src/images/beer.png`
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-123681166-2'
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/beer.png'
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-purgecss`
  ]
}
