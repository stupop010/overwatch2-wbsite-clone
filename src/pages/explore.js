import React, { useEffect, useState } from "react"
import Parallax from "parallax-js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExploreBackground from "../components/Explore/ExploreBackgroundImg"
import ExploreOverlay from "../components/Explore/ExploreOverlayInfo"
import NavOverlay from "../components/NavOverlay"
import TracerImg from "../components/Explore/TracerImg"
import EnemyImg from "../components/Explore/EnemyImg"
import LucioImg from "../components/Explore/LucioImg"

const ExplorePage = () => {
  const [darken, setDarken] = useState({})

  useEffect(() => {
    const parallax = document.getElementById("parallax")
    new Parallax(parallax)
  }, [])

  return (
    <Layout>
      <SEO title="explore" />
      <div>
        <div className="bg-container">
          <main>
            <div className="menu-bg section">
              <div className="menu-bg-inner">
                <div className="menu-bg-show" id="parallax">
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      width: "100%",
                      pointerEvents: "none",
                    }}
                    className={
                      Object.keys(darken).length > 0 ? "bg-darken" : null
                    }
                  ></div>
                  <ExploreBackground />
                  <TracerImg setDarken={setDarken} darken={darken} />
                  <EnemyImg setDarken={setDarken} darken={darken} />
                  <LucioImg setDarken={setDarken} darken={darken} />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      width: "100%",
                      pointerEvents: "none",
                    }}
                    className={
                      Object.keys(darken).length > 0 ? "bg-darken" : null
                    }
                  ></div>
                </div>
              </div>
            </div>
            <ExploreOverlay />
            <NavOverlay whiteLogo={true} color="white" title="explore" />
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default ExplorePage
