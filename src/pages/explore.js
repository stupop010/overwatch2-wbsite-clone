import React, { useEffect, useState } from "react"
import Parallax from "parallax-js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExploreBackground from "../components/Explore/ExploreBackground"
import ExploreOverlay from "../components/Explore/ExploreOverlay"
import NavOverlay from "../components/NavOverlay"
import Tracer from "../components/Explore/Tracer"
import Enemy from "../components/Explore/Enemy"
import Lucio from "../components/Explore/Lucio"

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
            <NavOverlay whiteLogo={true} color="white" title="explore" />
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default ExplorePage
