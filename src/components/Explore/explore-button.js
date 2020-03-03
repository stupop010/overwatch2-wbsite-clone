import React from "react"
import PropTypes from "prop-types"

const ExploreButton = ({ text, ifDarken, className }) => {
  return (
    <span className={className}>
      <div
        className={
          ifDarken ? `explore-button btn-dark bright` : "explore-button"
        }
      >
        {text}
      </div>
      <span className={ifDarken ? "explore-circle scale" : "explore-circle"}>
        <span
          className={
            ifDarken ? "explore-circle-icon scale" : "explore-circle-icon"
          }
        ></span>
      </span>
    </span>
  )
}

ExploreButton.propTypes = {
  text: PropTypes.string.isRequired,
  ifDarken: PropTypes.bool.isRequired,
}

export default ExploreButton
