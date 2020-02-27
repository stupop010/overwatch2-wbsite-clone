import React from "react"
import bgSky from "../../images/menu-bg-sky-LG.jpg"
import bgCoast from "../../images/menu-bg-coast-LG.png"
import bgGround from "../../images/menu-bg-ground-LG.png"
import bgShip from "../../images/menu-bg-ship-LG.png"

const ExploreBackground = () => {
  return (
    <>
      <div className="bg-layer bg-sky" data-depth="0.18">
        <img src={bgSky} />
      </div>

      <div className="bg-layer bg-coast" data-depth="0.19">
        <img src={bgCoast} />
      </div>

      <div className="bg-layer bg-ship" data-depth="0.13">
        <img src={bgShip} />
      </div>

      <div className="bg-layer bg-ground" data-depth="0.2">
        <img src={bgGround} />
      </div>
    </>
  )
}

export default ExploreBackground
