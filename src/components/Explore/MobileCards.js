import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const MobileCards = () => {
  const { bot, lucio, tracer } = useStaticQuery(graphql`
    query {
      bot: file(relativePath: { eq: "bot-card.jpg" }) {
        childImageSharp {
          fixed(width: 175, height: 175, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lucio: file(relativePath: { eq: "lucio-card.jpg" }) {
        childImageSharp {
          fixed(width: 175, height: 174, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tracer: file(relativePath: { eq: "tracer-card.png" }) {
        childImageSharp {
          fixed(width: 175, height: 175, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="mobile-cards">
      <Link>
        <div className="card">
          <div className="card-img">
            <Img fixed={tracer.childImageSharp.fixed} />
          </div>
          <div className="card-content">
            <p className="card-title">Team vs. team</p>
            <p>a new era of epic competition</p>
          </div>
          <div className="next-link">
            <div>></div>
          </div>
        </div>
      </Link>

      <Link>
        <div className="card">
          <div className="card-img">
            <Img fixed={bot.childImageSharp.fixed} />
          </div>
          <div className="card-content">
            <p className="card-title">co-op missions</p>
            <p>power up and save the world</p>
          </div>
          <div className="next-link">
            <div>></div>
          </div>
        </div>
      </Link>

      <Link>
        <div className="card">
          <div className="card-img">
            <Img fixed={lucio.childImageSharp.fixed} />
          </div>
          <div className="card-content">
            <p className="card-title">new look</p>
            <p>a visual evolution</p>
          </div>
          <div className="next-link">
            <div>></div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MobileCards
