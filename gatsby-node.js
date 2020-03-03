const path = require(`path`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/explore/co-op-missions",
    component: path.resolve("./src/templates/CoOpMissionTemplate.js"),
    context: {},
  })
}
