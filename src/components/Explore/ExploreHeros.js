import React from "react"
import Tracer from "./Tracer"
import Enemy from "./Enemy"
import Lucio from "./Lucio"

const ExploreHeros = ({ setDarken, darken }) => (
  <>
    <Tracer setDarken={setDarken} darken={darken} />
    <Enemy setDarken={setDarken} darken={darken} />
    <Lucio setDarken={setDarken} darken={darken} />
  </>
)

export default ExploreHeros
