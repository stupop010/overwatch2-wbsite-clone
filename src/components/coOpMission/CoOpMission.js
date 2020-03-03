import React, { useState, useReducer } from "react"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import CoOpMissionDesktop from "./CoOpMissionDesktop"
import CoOpMissionMobile from "./CoOpMissionMobile"

const CoOpMission = () => {
  const { width } = useWindowDimensions()
  return <>{width < 960 ? <CoOpMissionMobile /> : <CoOpMissionDesktop />}</>
}

export default CoOpMission
