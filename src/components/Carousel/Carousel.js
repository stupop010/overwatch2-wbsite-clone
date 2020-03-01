import React from "react"
import Slider from "./Slider"

const Carousel = ({ imageSet }) => {
  console.log(imageSet)
  return (
    <div className="carousel">
      <Slider slides />
    </div>
  )
}

export default Carousel
