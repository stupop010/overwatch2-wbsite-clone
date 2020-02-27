import React from "react"
import PropTypes from "prop-types"
import has from "lodash.has"
import ExploreButton from "./ExploreButton"
import enemy from "../../images/menu-bot-main-LG.png"

const Enemy = ({ setDarken, darken }) => {
  const ifDarken = has(darken, "enemy")

  return (
    <div className={ifDarken ? "enemy bright" : "enemy"} data-depth="0.2">
      <div style={{ width: "21%" }}>
        <div className="enemy-bot">
          <img src={enemy} />
          <a
            href="/team-vs-team"
            className="explore-link"
            onPointerEnter={() => setDarken({ ["enemy"]: true })}
            onPointerLeave={() => setDarken({})}
            name="enemy"
          >
            <ExploreButton
              text="co-op missions"
              ifDarken={ifDarken}
              className="enemy-btn"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

Enemy.propTypes = {
  setDarken: PropTypes.func.isRequired,
  darken: PropTypes.object.isRequired,
}

export default Enemy
