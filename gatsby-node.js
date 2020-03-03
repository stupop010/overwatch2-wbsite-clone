const path = require(`path`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const CoOpMission = path.resolve("./src/components/CoOpMission/index.js")

  createPage({
    path: "/explore/co-op-missions",
    component: CoOpMission,
    context: {},
  })
}
