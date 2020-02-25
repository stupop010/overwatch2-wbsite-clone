import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExploreBackground from "../components/explore/ExploreBackground"
import Tracer from "../components/explore/Tracer"
import Parallax from "parallax-js"
import Enemy from "../components/explore/Enemy"
import Lucio from "../components/explore/Lucio"

const ExplorePage = () => {
  useEffect(() => {
    const parallax = document.getElementById("parallax")
    const parallaxInstance = new Parallax(parallax)
  }, [])

  return (
    <Layout>
      <SEO title="explore" />
      <div>
        <div className="bg-container ">
          <main>
            <div className="menu-bg section">
              <div className="menu-bg-inner">
                <div className="menu-bg-show" id="parallax">
                  <ExploreBackground />
                  <Tracer />
                  <Enemy />
                  <Lucio />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default ExplorePage
