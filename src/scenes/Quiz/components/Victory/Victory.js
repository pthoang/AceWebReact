import React, { Component } from 'react'

import Solution from '../Solution/Solution'
import Feedback from '../Feedback/Feedback'

export default class Victory extends Component {

  render() {
    return(
      <div>
        <Feedback score={this.props.score}
                  quizLength={this.props.exercises.length} />          

        {this.props.exercises.map((exercise, index) =>
        <Solution key={index}
                  question={exercise.question.text}
                  answer={exercise.alternatives.filter(alternative => alternative.correct)[0].text}
                  userAnswered={exercise.alternatives[this.props.userAnswered[index]].text}/>)
        }
      </div>
    )
  }
}
