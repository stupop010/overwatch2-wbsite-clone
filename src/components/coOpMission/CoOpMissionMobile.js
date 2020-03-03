import React from "react"
import { Link } from "gatsby"
import MobileCoOpSection from "./mobileCoOpSection"

import {
  CoOpMissionsStory,
  CoOpMissionsHero,
  CoOpMissionsFactions,
} from "../carousel/carouselSideData"

const CoOpMissionMobile = () => {
  return (
    <div className="co-op-mobile">
      <div className="co-op-mobile-title">
        <h1>POWER UP AND SAVE THE WORLD</h1>
      </div>
      <MobileCoOpSection
        title="ACTION-PACKED STORY MISSIONS"
        images={CoOpMissionsStory()}
        content="Play an active role in the next chapter of the Overwatch saga through a series of intense four-player missions. Fight back against Null Sector, uncover the motives behind the omnic attacks, and confront a rising wave of new threats."
      />
      <MobileCoOpSection
        content="The battle continues with Hero Missions. As escalating crises break out around the world, encounter an ever-changing array of scenarios with a range of diverse and dangerous enemies. Level up your favorite heroes and earn powerful customization options to help beat the odds."
        title="REPLAYABLE HERO MISSIONS"
        images={CoOpMissionsHero()}
      />
      <MobileCoOpSection
        title="NEW FACTIONS ARISE"
        images={CoOpMissionsFactions()}
        content="It’s up to you and your friends to stop Null Sector, the elite forces of Talon, and other enemies of Overwatch from carrying out their plans. Each enemy faction features a unique mix of units with their own strategies and strengths, challenging you to adapt your approach every time you play."
      />
      <Link className="co-op-btn">
        <span>{"<"}</span> back to menu
      </Link>
    </div>
  )
}

export default CoOpMissionMobile
