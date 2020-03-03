import CoOpMissionOne from "../../static/images/co-op-missions-one.jpg"
import CoOpMissionTwo from "../../static/images/co-op-missions-two.jpg"
import CoOpMissionThree from "../../static/images/co-op-missions-three.jpg"

import HeroOne from "../../static/images/hero-one.jpg"
import HeroTwo from "../../static/images/hero-two.jpg"
import HeroThree from "../../static/images/hero-three.jpg"

import FactionsOne from "../../static/images/factions-one.png"
import FactionsTwo from "../../static/images/factions-two.jpg"
import FactionsThree from "../../static/images/factions-three.jpg"
import FactionsFour from "../../static/images/factions-four.png"

export const carouselReducer = (state, action) => {
  switch (action.type) {
    case "story":
      return CoOpMissionsStory()
    case "hero":
      return CoOpMissionsHero()
    case "factions":
      return CoOpMissionsFactions()
    default:
      return null
  }
}

export const CoOpMissionsStory = () => {
  const slides = [
    {
      picture: CoOpMissionOne,
      content: "CHARGE BOLDLY INTO BATTLE ALONGSIDE YOUR FRIENDS",
      id: 1,
    },
    {
      picture: CoOpMissionTwo,
      content: "CONFRONT GLOBAL CONFLICT IN NEW LOCATIONS",
      id: 2,
    },
    {
      picture: CoOpMissionThree,
      content: "LEVEL UP YOUR GAMEPLAY WITH ITEMS",
      id: 3,
    },
  ]
  return slides
}

export const CoOpMissionsHero = () => {
  const slides = [
    {
      picture: HeroOne,
      content: "BRING THE HAMMER DOWN WITH POWERFUL CUSTOMIZATION",
      id: 1,
    },
    {
      picture: HeroTwo,
      content: "GAIN AN EXTRA EDGE BY MODIFYING YOUR ATTACKS",
      id: 2,
    },
    {
      picture: HeroThree,
      content: "AID YOUR ALLIES WITH DIVERSE ITEMS",
      id: 3,
    },
  ]
  return slides
}

export const CoOpMissionsFactions = () => {
  const slides = [
    { picture: FactionsOne, content: "NULL SECTOR", id: 1 },
    { picture: FactionsTwo, content: "NULL SECTOR", id: 2 },
    { picture: FactionsThree, content: "NULL SECTOR", id: 3 },
    { picture: FactionsFour, content: "NULL SECTOR", id: 4 },
  ]
  return slides
}
