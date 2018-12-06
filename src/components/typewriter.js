import TypeIt from 'typeit'
import React from 'react'

class Type extends React.Component {
  componentDidMount() {
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
