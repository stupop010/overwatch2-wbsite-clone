import { graphql, useStaticQuery } from "gatsby"

export const carouselReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "story":
      return CoOpMissionsStory()
    case "hero":
      console.log("hero")
      return
    default:
      return null
  }
}

export const CoOpMissionsStory = () => {
  const { carouselOne, carouselTwo, carouselThree } = useStaticQuery(
    graphql`
      query {
        carouselOne: file(relativePath: { eq: "co-op-missions-one.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        carouselTwo: file(relativePath: { eq: "co-op-missions-two.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        carouselThree: file(relativePath: { eq: "co-op-missions-three.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const slides = [
    {
      carouselOne,
      content: "CHARGE BOLDLY INTO BATTLE ALONGSIDE YOUR FRIENDS",
      id: 1,
    },
    {
      carouselTwo,
      content: "CHARGE BOLDLY INTO BATTLE ALONGSIDE YOUR FRIENDS",
      id: 2,
    },
    {
      carouselThree,
      content: "CHARGE BOLDLY INTO BATTLE ALONGSIDE YOUR FRIENDS",
      id: 3,
    },
  ]
  return slides
}
