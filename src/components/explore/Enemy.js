import React from "react"

import enemy from "../../images/menu-bot-main-LG.png"

const Enemy = () => {
  return (
    <div className="enemy" data-depth="0.2">
      <div style={{ width: "21%" }}>
        <div className="enemy-bot">
          <img src={enemy} />
        </div>
      </div>
    </div>
  )
}

export default Enemy
