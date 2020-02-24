import React from "react"
import PropTypes from "prop-types"
import tracer from "../../images/menu-hero-tracer-LG.png"
import "../../styles.scss"

const Tracer = ({ clientX, clientY }) => {
  return (
    <div
    // className="hero-tracer"
    // style={{
    //   transform: `translate3d(${clientX + 50}px, ${clientY + 50}px, 0px)`,
    // }}
    >
      <img src={tracer} />
    </div>
  )
}

Tracer.propTypes = {
  clientX: PropTypes.number.isRequired,
  clientY: PropTypes.number.isRequired,
}
export default Tracer
