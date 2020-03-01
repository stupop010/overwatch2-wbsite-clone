import React, { useState } from "react"
import OverwatchLogo from "../OverwatchLogo"
import Accordion from "../Accordion"

const CoOpMission = () => {
  const [active, setActive] = useState("story")

  return (
    <div className="co-op-grid">
      <div className="do">
        <div className="overwatch-logo co-op-logo">
          <OverwatchLogo title="Co-op missions" />
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
      <div style={{ background: "blue" }} className="do">
        sss
      </div>
    </div>
  )
}

export default CoOpMission
