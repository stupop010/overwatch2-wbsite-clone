import React from "react"
import Winston from "./winston"
import Rein from "./rein"
import Tracer from "./tracer"
import Mei from "./mei"
import Brig from "./brig"
import Genji from "./genji"
import WhatNextBg from "../../static/images/whats-next-bg-lg.jpg"
import WhatNextfront from "../../static/images/whats-next-fx-front-xl.png"
import WhatNextEcho from "../../static/images/whats-next-hero-echo-md.png"

import WhatNextMercy from "../../static/images/whats-next-hero-mercy-md.png"

const WhatNext = () => (
  <>
    <div className="bg-layer full-width" data-depth="0.01">
      <div className="whats-next-bg">
        <img src={WhatNextBg} />
      </div>
    </div>
    <Rein />
    <Brig />
    <Genji />
    <Tracer />
    <Mei />
    <Winston />
  </>
)

export default WhatNext
