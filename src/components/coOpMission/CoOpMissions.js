import React from "react"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import CoOpMissionDesktop from "./coOpMissionDesktop"
import CoOpMissionMobile from "./coOpMissionMobile"

const CoOpMissions = () => {
  const { width } = useWindowDimensions()
  return <>{width < 960 ? <CoOpMissionMobile /> : <CoOpMissionDesktop />}</>
}

export default CoOpMissions
