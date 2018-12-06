import React, { Fragment } from 'react'
let TypeIt = Fragment

if (typeof window !== `undefined`) {
  TypeIt = require('typeit').default
}
class Type extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-new
    new TypeIt(this.el, this.props)
  }

  render() {
    return (
      <span
        ref={el => {
          this.el = el
        }}
      >
        {this.props.children}
      </span>
    )
  }
}

export default Type
