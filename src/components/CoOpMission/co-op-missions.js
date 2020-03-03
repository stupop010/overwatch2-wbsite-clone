import React from "react"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import CoOpMissionDesktop from "./co-op-mission-desktop"
import CoOpMissionMobile from "./co-op-mission-mobile"

const CoOpMissions = () => {
  const { width } = useWindowDimensions()
  return <>{width < 960 ? <CoOpMissionMobile /> : <CoOpMissionDesktop />}</>
}

export default CoOpMissions
