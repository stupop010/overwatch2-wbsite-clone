import React from "react"

const CarouselDots = ({
  imageSetLength,
  setCurrentImageIndex,
  currentImageIndex,
  dotsColor,
}) => {
  const buttons = []

  for (let i = 0; i < imageSetLength; i++) {
    buttons.push(
      <button
        key={i}
        className={
          currentImageIndex === i
            ? `dot dot-${dotsColor}-active dot-${dotsColor}`
            : `dot dot-${dotsColor}`
        }
        onClick={() => setCurrentImageIndex(i)}
      ></button>
    )
  }

  return <div>{buttons}</div>
}

export default CarouselDots
