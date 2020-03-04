import React from "react"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import CoOpMissionDesktop from "./co-op-mission-desktop"
import CoOpMissionMobile from "./co-op-mission-mobile"
import Layout from "../layout"

const CoOpMissions = () => {
  const { width } = useWindowDimensions()
  return (
    <Layout>
      {width < 960 ? <CoOpMissionMobile /> : <CoOpMissionDesktop />}
    </Layout>
  )
}

export default CoOpMissions
