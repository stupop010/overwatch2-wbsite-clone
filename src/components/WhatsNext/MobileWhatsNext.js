import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const MobileWhatsNext = () => {
  const { file } = useStaticQuery(graphql`
    query picture {
      file(relativePath: { eq: "mobile-hero.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(file)
  return (
    <div className="whats-next-mobile">
      <h1>YOUR MISSION CONTINUES</h1>
      <Img fluid={file.childImageSharp.fluid} />
    </div>
  )
}

export default MobileWhatsNext
