import React from "react"
import bgSky from "../../static/images/menu-bg-sky-LG.jpg"
import bgCoast from "../../static/images/menu-bg-coast-LG.png"
import bgGround from "../../static/images/menu-bg-ground-LG.png"
import bgShip from "../../static/images/menu-bg-ship-LG.png"

const ExploreBackgroundImg = () => {
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

export default ExploreBackgroundImg
