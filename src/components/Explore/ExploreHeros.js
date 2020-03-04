import React from "react"
import TracerImg from "./TracerImg"
import EnemyImg from "./EnemyImg"
import LucioImg from "./LucioImg"

const ExploreHeros = ({ setDarken, darken }) => (
  <>
    <TracerImg setDarken={setDarken} darken={darken} />
    <EnemyImg setDarken={setDarken} darken={darken} />
    <LucioImg setDarken={setDarken} darken={darken} />
  </>
)

export default ExploreHeros
