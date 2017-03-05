import React, { Component } from 'react'
import { Link } from 'react-router'
import * as apiCalls from '../../services/api/api'

import SubjectHeader from './components/SubjectHeader/SubjectHeader'
import Collection from './components/Collection/Collection'

export default class Subject extends Component {
  constructor() {
    super();
    this.state = {
      subject: {},
      collections: []
    }
  }

  render() {
    return(
      <div>
        <SubjectHeader name={this.state.subject.name} code={this.state.subject.code}/>
        {this.state.collections
          .map(collection =>
            <Link key={collection.id} to={{pathname: `/subjects/${this.props.params.subjectId}/collections/${collection.id}/quiz`}}>
              <Collection className="collection" key={collection.id} name={collection.name} modified={collection.modified}/>
            </Link>
          )}
      </div>
    )
  }


  componentDidMount() {
    this._isMounted = true
    const subjectId = this.props.params.subjectId
    apiCalls.get(`/subjects/${subjectId}`)
      .then(response => this._isMounted && this.setState(prevState => {
        return {...prevState, subject: response.data}
      }))
    apiCalls.get(`/subjects/${subjectId}/collections`)
      .then(response => this._isMounted && this.setState(prevState => {
        return {prevState, collections: response.data}
      }))
  }

  componentWillUnmount() {
    this._isMounted = false
  }
}
