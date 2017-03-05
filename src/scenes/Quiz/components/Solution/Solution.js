import React, { Component } from 'react'

export default class Solution extends Component {

  render() {
    return(
      <div>
        <h2>{this.props.question}</h2>
        <p>Svar: {this.props.answer}</p>
        {this.props.answer !== this.props.userAnswered && <p>Ditt svar: {this.props.userAnswered}</p>}
      </div>
    )
  }
}
