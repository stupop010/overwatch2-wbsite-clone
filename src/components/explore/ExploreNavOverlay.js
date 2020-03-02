import React from "react"
import OverwatchLogo from "../overwatchLogo"

const ExploreNavOverlay = () => {
  return (
    <div className="explore-nav-overlay">
      <div className="overwatch-logo">
        <OverwatchLogo title="explore" whiteLogo />
      </div>
      <div className="overwatch-menu">
        <a href="https://playoverwatch.com/en-gb/">
          <svg
            class="OW1Link-icon-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="30"
            viewBox="0 0 50 30"
          >
            <path
              fillRule="evenodd"
              d="M50.01 8.02V3.28h-20.3a18.159 18.159 0 0 1 3.11 4.74h17.19zm0 18.71v-4.74H32.85a18.3 18.3 0 0 1-3.05 4.74h20.21zm-15.98-9.36h15.98v-4.73H34.02a11.537 11.537 0 0 1 .01 4.73zM15.57 4.31a11.423 11.423 0 0 1 6.84 2.25l2.78-3.34a16.015 16.015 0 0 0-19.25-.01l2.79 3.35a11.4 11.4 0 0 1 6.84-2.25zm10.48-.39l-2.79 3.35a10.474 10.474 0 0 1 3.46 7.74 10.347 10.347 0 0 1-1.48 5.34l-6.14-5.73-2.86-6.27v9.52l6.07 5.67a11.509 11.509 0 0 1-13.48 0l6.07-5.67V8.35l-2.86 6.27-6.14 5.73A10.408 10.408 0 0 1 7.87 7.26L5.08 3.91A14.721 14.721 0 0 0 0 15.01c0 8.28 6.98 15 15.58 15s15.56-6.72 15.56-15a14.794 14.794 0 0 0-5.09-11.09z"
            ></path>
          </svg>
        </a>
      </div>
      <div className="overwatch-story">
        <h4>story</h4>
        <p>></p>
      </div>
    </div>
  )
}

export default ExploreNavOverlay
