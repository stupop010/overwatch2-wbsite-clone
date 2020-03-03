import React, { useState, useReducer } from "react"
import { Link } from "gatsby"
import OverWatchLogo from "../OverwatchLogo"
import Accordion from "../Accordion/index.js"
import Carousel from "../Carousel/index.js"

import {
  carouselReducer,
  CoOpMissionsStory,
} from "../Carousel/CarouselSideData"

const CoOpMissionDesktop = () => {
  const [active, setActive] = useState("story")
  const [state, dispatch] = useReducer(carouselReducer, CoOpMissionsStory())
  return (
    <div className="co-op-grid">
      <div className="do">
        <div className="overwatch-logo co-op-logo">
          <OverWatchLogo title="Co-op missions" />
        </div>
        <div className="co-op-content">
          <h1>POWER UP AND SAVE THE WORLD</h1>
          <div className="co-op-accordion">
            <Accordion
              title="action-packed story missions"
              name="story"
              active={active}
              setActive={setActive}
              expand={active === "story"}
              dispatch={dispatch}
            >
              Play an active role in the next chapter of the Overwatch saga
              through a series of intense four-player missions. Fight back
              against Null Sector, uncover the motives behind the omnic attacks,
              and confront a rising wave of new threats.
            </Accordion>
            <Accordion
              title="replayable hero missions"
              name="hero"
              active={active}
              setActive={setActive}
              expand={active === "hero"}
              dispatch={dispatch}
            >
              The battle continues with Hero Missions. As escalating crises
              break out around the world, encounter an ever-changing array of
              scenarios with a range of diverse and dangerous enemies. Level up
              your favorite heroes and earn powerful customization options to
              help beat the odds.
            </Accordion>
            <Accordion
              title="new factions arise"
              name="factions"
              active={active}
              setActive={setActive}
              expand={active === "factions"}
              dispatch={dispatch}
            >
              It’s up to you and your friends to stop Null Sector, the elite
              forces of Talon, and other enemies of Overwatch from carrying out
              their plans. Each enemy faction features a unique mix of units
              with their own strategies and strengths, challenging you to adapt
              your approach every time you play.
            </Accordion>
          </div>
        </div>
      </div>
      <div className="do">
        <Link to="/explore" className="back-btn" />
        <Carousel imageSet={state} />
      </div>
    </div>
  )
}

export default CoOpMissionDesktop
