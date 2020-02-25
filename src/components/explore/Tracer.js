import React from "react"
import tracer from "../../images/menu-hero-tracer-LG.png"
import tracerFx from "../../images/menu-hero-tracer-fx-LG.png"
import "../../styles.scss"

const Tracer = () => {
  return (
    <div className="tracer-link" data-depth="0.15">
      <div className="hero-tracer">
        <img src={tracer} />
      </div>
      <div className="tracer-fx">
        <img src={tracerFx} />
      </div>
    </div>
  )
}

export default Tracer
