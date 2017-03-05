import React, { Component } from 'react'

export default class ShopSubject extends Component {
  render() {
    return(
      <div>
        <span>{this.props.name}, {this.props.code}</span>
        <button className="btn btn-default" onClick={() => this.props.onClick()}>Legg til</button>
      </div>
    )
  }
}
