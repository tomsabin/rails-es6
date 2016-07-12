import React from "react"
import TestUtils from "react-addons-test-utils"
import Welcome from "components/Welcome"

describe("Welcome", () => {
  it("is assigned props", () => {
    let welcome = TestUtils.renderIntoDocument(<Welcome name="Bob" />)
    expect(welcome.props.name).to.equal("Bob")
  })

  it("renders correctly", () => {
    let result = TestUtils.createRenderer().render(<Welcome name="Betty" />)
    expect(result.type).to.equal("p")
  })
})
