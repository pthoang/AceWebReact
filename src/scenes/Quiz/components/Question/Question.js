import React, { Component } from 'react'

export default class Question extends Component {

  render() {
    return (
      <h1>{this.props.question}</h1>
    )
  }
}
