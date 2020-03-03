import React, { useEffect } from "react"
import Parallax from "parallax-js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExploreNavOverlay from "../components/NavOverlay/index"
import WhatsNext from "../components/WhatsNext/index"

const ExplorePage = () => {
  useEffect(() => {
    const parallax = document.getElementById("whats-next-parallax")
    new Parallax(parallax)
  }, [])

  return (
    <Layout>
      <SEO title="Whats Next" />
      <div>
        <div>
          <main>
            <div className="whats-next-section">
              <div className="whats-next-inner">
                <div id="whats-next-parallax" className="whats-next-show">
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      width: "100%",
                      pointerEvents: "none",
                    }}
                  ></div>
                  <WhatsNext />
                </div>
              </div>
            </div>
            <div style={{ height: "3rem" }}></div>
            <ExploreNavOverlay color="black" title="What's next" />
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default ExplorePage
