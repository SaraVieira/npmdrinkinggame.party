import React, { Fragment } from 'react'
import logo from '../images/beer.png'
let Type = Fragment

if (typeof window !== `undefined`) {
  Type = require('./typewriter').default
}

export default ({ afterComplete }) => (
  <Fragment>
    <img src={logo} className="beer" alt="beer emoji" />
    <p className="title">Container.is-dark</p>
    <p style={{ color: 'white', textAlign: 'center' }}>
      <Type
        afterComplete={afterComplete}
        speed={50}
        strings={[
          'Welcome to the npm drinking game',
          'The rules are simple.',
          'Input an english word in the input and if it exists in npm you must drink',
          'Good luck',
        ]}
      />
    </p>
  </Fragment>
)
