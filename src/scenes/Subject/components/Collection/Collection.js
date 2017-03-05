import React, { Component } from 'react'
import './Collection.css'

export default class Collection extends Component {

  render() {
    return(
      <button className="btn btn-default collection">
        <p>{this.props.name}</p>
      <p>{this.props.modified}</p>
      </button>
    )
  }
}
