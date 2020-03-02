import React from "react"

const CarouselDots = ({
  imageSetLength,
  setCurrentImageIndex,
  currentImageIndex,
}) => {
  const buttons = []
  console.log(currentImageIndex)

  for (let i = 0; i < imageSetLength; i++) {
    buttons.push(
      <button
        className={currentImageIndex === i ? "dot dot-active" : "dot"}
        onClick={() => setCurrentImageIndex(i)}
      ></button>
    )
  }

  return <div>{buttons}</div>
}

export default CarouselDots
