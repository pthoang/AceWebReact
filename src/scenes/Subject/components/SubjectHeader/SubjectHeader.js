import React, { Component } from 'react'

export default class SubjectHeader extends Component {

  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h4>{this.props.code}</h4>
      </div>

    )
  }
}
