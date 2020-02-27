import React from "react"
import PropTypes from "prop-types"
import has from "lodash.has"
import tracer from "../../images/menu-hero-tracer-LG.png"
import tracerFx from "../../images/menu-hero-tracer-fx-LG.png"
import "../../styles.scss"
import ExploreButton from "./ExploreButton"
import { Link } from "gatsby"

const Tracer = ({ darken, setDarken }) => {
  const ifDarken = has(darken, "tracer")

  return (
    <div
      className={ifDarken ? "tracer-wrapper bright" : "tracer-wrapper"}
      data-depth="0.15"
    >
      <div className="hero-tracer">
        <img src={tracer} />
        <Link
          to="/team-vs-team"
          className="explore-link"
          onPointerEnter={() => setDarken({ ["tracer"]: true })}
          onPointerLeave={() => setDarken({})}
          name="tracer"
        >
          <ExploreButton
            text="team vs team"
            ifDarken={ifDarken}
            className="tracer-btn"
          />
        </Link>
      </div>
      <div className={ifDarken ? "tracer-fx bright" : "tracer-fx"}>
        <img src={tracerFx} />
      </div>
    </div>
  )
}

Tracer.propTypes = {
  setDarken: PropTypes.func.isRequired,
  darken: PropTypes.object.isRequired,
}

export default Tracer
