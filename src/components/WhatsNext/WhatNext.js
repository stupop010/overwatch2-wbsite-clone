import React from "react"
import Winston from "./Winston"
import Rein from "./Rein"
import Tracer from "./Tracer"
import Mei from "./Mei"
import Brig from "./Brig"
import Genji from "./Genji"
import Echo from "./Echo"
import Mercy from "./Mercy"

import WhatNextBg from "../../static/images/whats-next-bg-lg.jpg"
import WhatNextfront from "../../static/images/whats-next-fx-front-xl.png"

const WhatNext = () => (
  <>
    <div className="bg-layer full-width" data-depth="0.01">
      <div className="whats-next-bg">
        <img src={WhatNextBg} />
      </div>
    </div>
    <Echo />
    <Mercy />
    <Winston />
    <Rein />
    <Brig />
    <Genji />
    <Tracer />
    <Mei />
  </>
)

export default WhatNext
