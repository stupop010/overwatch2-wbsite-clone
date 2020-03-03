import React from "react"
import PropTypes from "prop-types"
import has from "lodash.has"
import ExploreButton from "./exploreButton"
import lucio from "../../static/images/menu-hero-lucio-LG.png"
import lucioFx from "../../static/images/menu-hero-lucio-fx-LG.png"

const LucioImg = ({ darken, setDarken }) => {
  const ifDarken = has(darken, "lucio")

  return (
    <div
      className={ifDarken ? "lucio-wrapper bright" : "lucio-wrapper"}
      data-depth="0.26"
    >
      <div className="lucio">
        <img src={lucio} />
        <a
          href="new look"
          className="explore-link"
          onPointerEnter={() => setDarken({ ["lucio"]: true })}
          onPointerLeave={() => setDarken({})}
        >
          <ExploreButton
            text="new look"
            ifDarken={ifDarken}
            className="lucio-btn"
          />
        </a>
      </div>
      <div className={ifDarken ? "lucio-fx bright" : "lucio-fx"}>
        <img src={lucioFx} />
      </div>
    </div>
  )
}

LucioImg.propTypes = {
  darken: PropTypes.object.isRequired,
  setDarken: PropTypes.func.isRequired,
}

export default LucioImg
