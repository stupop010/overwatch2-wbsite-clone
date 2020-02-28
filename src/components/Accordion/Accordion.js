import React, { useState } from "react"

const Accordion = ({ title, children }) => {
  const [active, setActive] = useState("")

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "")
  }

  return (
    <div className="accordion-section" onClick={toggleAccordion}>
      <button className={`accordion ${active}`} onClick={toggleAccordion}>
        <p className="accordion-title">{title}</p>
      </button>
      <div className="accordion-content">
        <p className="accordion-text">{children}</p>
      </div>
    </div>
  )
}

export default Accordion
