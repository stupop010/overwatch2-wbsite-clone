import React, { useState } from "react"
import CarouselDots from "./CarouselDots"

const SliderImg = ({
  img,
  imageSetLength,
  setCurrentImageIndex,
  currentImageIndex,
}) => {
  if (!img) return null
  return (
    <div
      className="carousel-background"
      style={{ backgroundImage: `url('${img.picture}')` }}
    >
      <div className="carousel-controls">
        <p>{img.content}</p>
        <CarouselDots
          imageSetLength={imageSetLength}
          setCurrentImageIndex={setCurrentImageIndex}
          currentImageIndex={currentImageIndex}
          dotsColor="white"
        />
      </div>
    </div>
  )
}

export default SliderImg
