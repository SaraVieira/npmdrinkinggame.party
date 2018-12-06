import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import 'nes.css/css/nes.css'
import 'animate.css'

import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
          <meta charset="utf-8" />
          <title>The NPM drinking game</title>
          <meta name="description" content="Good Luck!" />
          <meta
            name="image"
            content="https://rawcdn.githack.com/SaraVieira/npmdrinkinggame.com/bc29d1b751533b73c639654f13feb6592a52acc2/src/images/beer.png"
          />
          <meta itemProp="name" content="The NPM drinking game" />
          <meta itemProp="description" content="Good Luck!" />
          <meta
            itemProp="image"
            content="https://rawcdn.githack.com/SaraVieira/npmdrinkinggame.com/bc29d1b751533b73c639654f13feb6592a52acc2/src/images/beer.png"
          />
          <meta name="og:title" content="The NPM drinking game" />
          <meta name="og:description" content="Good Luck!" />
          <meta
            name="og:image"
            content="https://rawcdn.githack.com/SaraVieira/npmdrinkinggame.com/bc29d1b751533b73c639654f13feb6592a52acc2/src/images/beer.png"
          />
          <meta name="og:site_name" content="The NPM drinking game" />
          <meta name="og:type" content="website" />
        </Helmet>

        {children}
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
