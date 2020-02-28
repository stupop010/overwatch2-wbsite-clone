import React from "react"
import OverwatchLogo from "../OverwatchLogo"
import Accordion from "../Accordion"

const CoOpMission = () => {
  return (
    <div className="co-op-grid">
      <div className="do">
        <div className="overwatch-logo co-op-logo">
          <OverwatchLogo title="Co-op missions" />
        </div>
        <div className="co-op-content">
          <h1>POWER UP AND SAVE THE WORLD</h1>
          <Accordion title="What is your return policy?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion>
          <Accordion title="What is your return policy?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion>
          <Accordion title="What is your return policy?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion>
        </div>
      </div>
      <div style={{ background: "blue" }} className="do">
        sss
      </div>
    </div>
  )
}

export default CoOpMission
