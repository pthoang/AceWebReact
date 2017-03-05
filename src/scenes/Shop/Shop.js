import React, { Component } from 'react'
import * as apiCalls from '../../services/api/api'
import update from 'immutability-helper'

import ShopSubject from './components/ShopSubject/ShopSubject'

export default class Shop extends Component {
  constructor() {
    super();
    this.state = {
      subjects: []
    }
  }

  render() {
    return (
      <div>
        {this.state.subjects
          .map((subject, index) => <ShopSubject key={subject.id} name={subject.name} code={subject.code} onClick={() => this.handleAddSubject(index)}/>)}
      </div>
    )
  }

  handleAddSubject(index) {
    const data = {
      favorite: true
    }
    apiCalls.put(`/subjects/${this.state.subjects[index].id}`, data)
      .then(response => {
        const newStateSubjects = update(this.state.subjects, {$splice: [[index, 1]]})
        this._isMounted && this.setState({subjects: newStateSubjects})
      })
      .catch(response => console.log(response))
  }

  componentDidMount() {
    this._isMounted = true
    apiCalls.get("/subjects")
      .then(response => this._isMounted && this.setState(prevState => {
        return {...prevState, subjects: response.data.filter(subject => !subject.favorite)}
      }))
      .catch(response => console.log(response))
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

}
