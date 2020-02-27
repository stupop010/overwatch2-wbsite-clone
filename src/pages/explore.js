import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExploreBackground from "../components/explore/ExploreBackground"
import ExploreOverlay from "../components/explore/ExploreOverlay"
import ExploreNavOverlay from "../components/explore/ExploreNavOverlay"
import Tracer from "../components/explore/Tracer"
import Parallax from "parallax-js"
import Enemy from "../components/explore/Enemy"
import Lucio from "../components/explore/Lucio"

const ExplorePage = () => {
  const [darken, setDarken] = useState({})

  useEffect(() => {
    const parallax = document.getElementById("parallax")
    const parallaxInstance = new Parallax(parallax)
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
                  <Tracer setDarken={setDarken} darken={darken} />
                  <Enemy setDarken={setDarken} darken={darken} />
                  <Lucio setDarken={setDarken} darken={darken} />
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
            <ExploreNavOverlay />
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default ExplorePage
