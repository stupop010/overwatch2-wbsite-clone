import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import bgSky from "../images/menu-bg-sky-LG.jpg"
import bgCoast from "../images/menu-bg-coast-LG.png"
import bgGround from "../images/menu-bg-ground-LG.png"
import bgShip from "../images/menu-bg-ship-LG.png"
import "../styles.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
