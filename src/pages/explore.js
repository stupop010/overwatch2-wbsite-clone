import React, { useEffect, useState } from "react"
import Parallax from "parallax-js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExploreBackground from "../components/Explore/ExploreBackgroundImg"
import ExploreOverlay from "../components/Explore/ExploreOverlay"
import NavOverlay from "../components/NavOverlay/index"
import ExploreHeros from "../components/Explore/ExploreHeros"
import ScrollPageLink from "../components/NavOverlay/StoryLink"

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
                  <ExploreHeros setDarken={setDarken} darken={darken} />
                </div>
              </div>
            </div>
            <ExploreOverlay />
            <NavOverlay whiteLogo={true} color="white" title="explore">
              <ScrollPageLink text="story"></ScrollPageLink>
            </NavOverlay>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default ExplorePage
