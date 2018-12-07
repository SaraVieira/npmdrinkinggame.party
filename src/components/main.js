import React from 'react'
import box from '../images/box.png'
import OhNo from '../components/ohno'
import Lucky from '../components/lucky'

export default ({ loading, result, p }) =>
  loading ? (
    <img
      src={box}
      width="100"
      className="animated infinite pulse loading"
      alt="beer emoji"
    />
  ) : result.code ? (
    <Lucky />
  ) : result.collected ? (
    <OhNo value={p} data={(result.collected || {}).metadata} />
  ) : null
