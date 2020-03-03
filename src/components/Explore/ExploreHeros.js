import React from "react"

const ExploreHeros = ({ setDarken, darken }) => (
  <>
    <Tracer setDarken={setDarken} darken={darken} />
    <EnemyImg setDarken={setDarken} darken={darken} />
    <LucioImg setDarken={setDarken} darken={darken} />
  </>
)

export default ExploreHeros
