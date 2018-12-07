import React from 'react'
import logo from '../images/beer.png'

export default ({ data, value }) => (
  <div className="drink jackInTheBox animated">
    <p className="white">Oh no! It Exists</p>
    <p className="white">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.npmjs.com/package/${value.toLowerCase()}`}
      >
        "{data.description}"
      </a>
    </p>
    <p className="white bottom-beer">
      Drink up
      <img src={logo} width="40" style={{ marginLeft: 10 }} alt="beer emoji" />
    </p>
  </div>
)
