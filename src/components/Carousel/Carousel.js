import React, { useState, useEffect } from "react"
import SliderImg from "./sliderImg"
import Arrow from "./arrow"

const Carousel = ({ imageSet }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [imageSet])

  const previousSlide = () => {
    const lastIndex = imageSet.length - 1
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1

    setCurrentImageIndex(index)
  }

  const nextSlide = () => {
    const lastIndex = imageSet.length - 1
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1

    setCurrentImageIndex(index)
  }

  return (
    <div className="carousel">
      <Arrow glyph="&#9664;" direction="left" clickFunction={previousSlide} />
      <SliderImg
        img={imageSet[currentImageIndex]}
        imageSetLength={imageSet.length}
        setCurrentImageIndex={setCurrentImageIndex}
        currentImageIndex={currentImageIndex}
      />
      <Arrow glyph="&#9654;" direction="right" clickFunction={nextSlide} />
    </div>
  )
}

export default Carousel
