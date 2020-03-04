import React from "react"
import TracerImg from "./Tracer"
import EnemyImg from "./Enemy"
import LucioImg from "./Lucio"

const ExploreHeros = ({ setDarken, darken }) => (
  <>
    <TracerImg setDarken={setDarken} darken={darken} />
    <EnemyImg setDarken={setDarken} darken={darken} />
    <LucioImg setDarken={setDarken} darken={darken} />
  </>
)

export default ExploreHeros
