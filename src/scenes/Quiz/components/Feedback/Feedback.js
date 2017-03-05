import React, { Component } from 'react'

export default class Feedback extends Component {

  render() {
    return(
      <div>
        <h1>{this.props.score} av {this.props.quizLength}</h1>
      </div>
    )
  }
}
