const path = require(`path`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/explore/co-op-missions",
    component: path.resolve("./src/components/co-op-mission/index.js"),
    context: {},
  })
}
