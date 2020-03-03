import React, { useState } from "react"

const MobileCarousel = ({ image, currentImageIndex }) => {
  const currentImage = image[currentImageIndex]
  return (
    <div
      className="mobile-carousel"
      style={{ backgroundImage: `url('${currentImage.picture}')` }}
    >
      <div>{currentImage.content}</div>
    </div>
  )
}

export default MobileCarousel
