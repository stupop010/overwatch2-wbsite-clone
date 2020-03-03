import React, { useState } from "react"
import MobileCarousel from "../MobileCarousel"
import CarouselDots from "../Carousel/carousel-dots"

const MobileCoOpSection = ({ title, content, images }) => {
  const [currentImageIndex, setcurrentImageIndex] = useState(0)
  return (
    <div className="mobile-section">
      <MobileCarousel image={images} currentImageIndex={currentImageIndex} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0.5rem",
        }}
      >
        <CarouselDots
          imageSetLength={images.length}
          setCurrentImageIndex={setcurrentImageIndex}
          currentImageIndex={currentImageIndex}
          dotsColor="black"
        />
      </div>
      <p className="section-title">{title}</p>
      <p className="section-content">{content}</p>
    </div>
  )
}

export default MobileCoOpSection
