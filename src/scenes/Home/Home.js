import React, { Component } from 'react'
import { Link } from 'react-router'
import * as apiCalls from '../../services/api/api'
import update from 'immutability-helper'

import Subject from './components/Subject/Subject'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      subjects: []
    }
  }

  render() {
    return (
      <div>
        <Link to="/shop">
          <button className="btn btn-default">Legg til fag</button>
        </Link>
        {this.state.subjects
          .map((subject, index) =>
          <div key={subject.id}>
            <Link to={{pathname: `/subjects/${subject.id}`}}>
            <Subject name={subject.name} code={subject.code} />
            </Link>
            <button className="btn btn-default" onClick={() => this.onRemoveSubject(index)}>Fjern</button>
          </div>
        )}
      </div>
    )
  }


  onRemoveSubject(index) {
    const data = {
      favorite: false
    }

    apiCalls.put(`/subjects/${this.state.subjects[index].id}`, data)
      .then(response => {
        const newStateSubjects = update(this.state.subjects, {$splice: [[index, 1]]})
        this._isMounted && this.setState({subjects: newStateSubjects})
      })
      .catch(response => console.log(response))

  }

  componentDidMount() {
    this._isMounted = true;
    apiCalls.get("/subjects")
      .then(response => this._isMounted && this.setState(prevState => {
        return {...prevState, subjects: response.data.filter(subject => subject.favorite)}
      }))
      .catch(response => console.log(response))
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

}
