import React, { Component, PropTypes } from "react"

class Welcome extends Component {
  render() {
    return (
      <p>
        Hello from {this.props.name}
      </p>
    )
  }
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
}

export default Welcome
