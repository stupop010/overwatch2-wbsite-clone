import React, { useState, useRef, useEffect } from "react"
import PropTypes from "./node_modules/prop-types"

const Accordion = ({ title, children, name, setActive, expand, dispatch }) => {
  const [height, setHeight] = useState(expand ? "200" : "0")
  const [width, setWidth] = useState("")

  const content = useRef(null)

  useEffect(() => {
    setHeight(expand ? content.current.scrollHeight : "0")
  }, [expand])

  const toggleAccordion = () => {
    if (expand) return
    dispatch({ type: name })
    setActive(expand ? "" : name)
    setHeight(expand ? content.current.scrollHeight : "0")
  }

  return (
    <div className="accordion-section">
      <button
        className={expand ? "accordion active" : "accordion"}
        onClick={toggleAccordion}
      >
        {title}
        {/* <p className="accordion-title">{title}</p> */}
      </button>
      <div
        className={expand ? "accordion-content" : "accordion-content"}
        ref={content}
        style={{ maxHeight: `${height}px` }}
      >
        <p className="accordion-text">{children}</p>
      </div>
    </div>
  )
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  expand: PropTypes.bool.isRequired,
}

export default Accordion
