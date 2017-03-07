import React, { Component } from 'react'
import * as apiCalls from '../../services/api/api'

import Exercise from './components/Exercise/Exercise'
import Victory from './components/Victory/Victory'

export default class Quiz extends Component{
  constructor() {
    super();
    this.state = {
      exercises: [],
      number: 0,
      score: 0,
      userAnswered: {}
    }
    this.onNextExercise = this.onNextExercise.bind(this)
    this.onPrevExercise = this.onPrevExercise.bind(this)
  }


  render() {
    return(
      <div>
        {this.state.exercises.length>0 && this.renderExerciseOrVictory(this.state.number)}
        <button className="btn btn-danger" onClick={this.onPrevExercise}>Forrige</button>
        <button className="btn btn-success" onClick={this.onNextExercise}>Neste</button>
      </div>
    )
  }

  renderExerciseOrVictory(number) {
    return (number < this.state.exercises.length ?
      <Exercise question={this.state.exercises[number].question.text}
                alternatives={this.state.exercises[number].alternatives}
                onUserAnswered={(index, correct) => this.state.userAnswered[number] === undefined?
                  this.handleUserAnswered(index, correct): this.onNextExercise()}
                userAnswered={this.state.userAnswered[number]}
      />
        :
      <Victory exercises={this.state.exercises}
               userAnswered={this.state.userAnswered}
               score={this.state.score} />)
  }

  handleUserAnswered(index, correct) {
    const newUserAnswered = {...this.state.userAnswered}
    newUserAnswered[this.state.number] = index
    this.setState(prevState => {
      return {...prevState, userAnswered: newUserAnswered}
    })

    correct && this.setState(prevState => {
      return {...prevState, score: prevState.score + 1}
    })

  }

  onPrevExercise() {
    this.state.number > 0 &&
      this.setState(prevState => {
        return {...prevState, number: prevState.number-1}
      })
  }

  onNextExercise() {
      this.setState(prevState => {
        return {...prevState, number: prevState.number+1}
      })
  }

  componentDidMount() {
    this._isMounted = true
    const collectionId = this.props.params.collectionId
    apiCalls.get(`/collections/${collectionId}/quiz?n=10`)
      .then(response => this._isMounted && this.setState(prevState => {
        return {...prevState, exercises: response.data}
      }))
      .catch(response => console.log(response))
  }

}
