import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import has from "lodash.has"
import ExploreButton from "./explore-button"
import enemy from "../../static/images/menu-bot-main-LG.png"

const EnemyImg = ({ setDarken, darken }) => {
  const ifDarken = has(darken, "enemy")

  return (
    <div className={ifDarken ? "enemy bright" : "enemy"} data-depth="0.2">
      <div style={{ width: "21%" }}>
        <div className="enemy-bot">
          <img src={enemy} />
          <Link
            to="/explore/co-op-missions"
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
          </Link>
        </div>
      </div>
    </div>
  )
}

EnemyImg.propTypes = {
  setDarken: PropTypes.func.isRequired,
  darken: PropTypes.object.isRequired,
}

export default EnemyImg
