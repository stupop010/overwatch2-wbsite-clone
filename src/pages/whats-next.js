import React, { useEffect } from "react"
import Parallax from "parallax-js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useWindowDimensions from "../hooks/useWindowDimensions"
import ExploreNavOverlay from "../components/NavOverlay"
import WhatsNext from "../components/WhatsNext"
import MobileWhatsNext from "../components/WhatsNext/MobileWhatsNext"
import OverlayText from "../components/WhatsNext/OverlayText"

const ExplorePage = () => {
  const { width } = useWindowDimensions()

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
              <MobileWhatsNext />
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
            <OverlayText />
            <ExploreNavOverlay color="black" title="What's next" />
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default ExplorePage
