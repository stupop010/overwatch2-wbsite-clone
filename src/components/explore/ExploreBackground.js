import React from "react"
import PropTypes from "prop-types"
import bgSky from "../../images/menu-bg-sky-LG.jpg"
import bgCoast from "../../images/menu-bg-coast-LG.png"
import bgGround from "../../images/menu-bg-ground-LG.png"
import bgShip from "../../images/menu-bg-ship-LG.png"

const ExploreBackground = ({ clientX, clientY }) => {
  return (
    <>
      <div className="bg-layer">
        <div
        // className="bg-sky"
        // style={{
        //   transform: `translate3d(${clientX}px, ${clientY}px, 0px)`,
        // }}
        >
          <img src={bgSky} />
        </div>
      </div>

      <div className="bg-layer">
        <div
        // className="bg-coast"
        // style={{
        //   transform: `translate3d(${clientX}px, ${clientY}px, 0px)`,
        // }}
        >
          <img src={bgCoast} />
        </div>
      </div>

      <div className="bg-layer">
        <div
        // className="bg-ship"
        // style={{
        //   transform: `translate3d(${clientX}px, ${clientY}px, 0px)`,
        // }}
        >
          <img src={bgShip} />
        </div>
      </div>

      <div className="bg-layer">
        <div
        // className="bg-ground"
        // style={{
        //   transform: `translate3d(${clientX}px, ${clientY}px, 0px)`,
        // }}
        >
          <img src={bgGround} />
        </div>
      </div>
    </>
  )
}

ExploreBackground.propTypes = {
  clientX: PropTypes.number.isRequired,
  clientY: PropTypes.number.isRequired,
}

export default ExploreBackground
