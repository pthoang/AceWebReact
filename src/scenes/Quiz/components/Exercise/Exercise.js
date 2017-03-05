import React, { Component } from 'react'


import Question from '../Question/Question'
import Alternative from '../Alternative/Alternative'

const styles = {

  correctStyle: {
    backgroundColor: "green",
    color: "white"
  },

  wrongStyle: {
    backgroundColor: "red",
    color: "white"
  }
}

export default class Exercise extends Component {

  render() {
    return(
      <div>
          <Question question={this.props.question}/>

          {this.props.alternatives.map((alternative, index) =>
            <Alternative style={this.props.userAnswered !== undefined ? this.showStyle(index, alternative.correct): {}}
              key={index} alternative={alternative.text}
              onClick={() => this.props.onUserAnswered(index, alternative.correct)} />)
          }
      </div>
    )
  }

  showStyle(index, correct) {
    return this.props.userAnswered !== undefined ?
      (correct? styles.correctStyle :
        (this.props.userAnswered === index ? styles.wrongStyle: {})) : {}
  }
}
