import React, { Component } from 'react'


export default class Alternative extends Component {

  render() {
    return (
      <div>
        <button style={this.props.style} className="btn btn-default" onClick={() => this.props.onClick()}>
          {this.props.alternative}
        </button>
      </div>
    )
  }
}
