import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExploreBackground from "../components/explore/ExploreBackground"
import Tracer from "../components/explore/Tracer"

const ExplorePage = () => {
  const [clientX, setClientX] = useState(0)
  const [clientY, setClientY] = useState(0)

  const mouseMove = e => {
    setClientX(e.clientX / 100 - 10)
    setClientY(e.clientY / 100 - 10)
  }
  return (
    <Layout>
      <SEO title="explore" />
      <div>
        <div style={{ height: "100vh" }}>
          <div className="bg-container section">
            <div className="menu-bg">
              <div className="menu-bg-inner">
                <ExploreBackground clientX={clientX} clientY={clientY} />
                <Tracer clientX={clientX} clientY={clientY} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ExplorePage
