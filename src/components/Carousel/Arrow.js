import React from "react"

const Arrow = ({ direction, glyph, clickFunction }) => (
  <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
)

export default Arrow
