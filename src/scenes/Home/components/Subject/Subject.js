import React, { Component } from 'react'

export default class Subject extends Component {

  render() {
    return (
      <button className="btn btn-default">
        {this.props.name}, {this.props.code}
      </button>
    )
  }

}
