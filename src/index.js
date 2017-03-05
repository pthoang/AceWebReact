import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import Home from './scenes/Home/Home'
import Shop from './scenes/Shop/Shop'
import Subject from './scenes/Subject/Subject'
import Quiz from './scenes/Quiz/Quiz'
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/subjects/:subjectId" component={Subject} />
          <Route path="/subjects/:subjectId/collections/:collectionId/quiz" component={Quiz}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
