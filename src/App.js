import React, { Component } from 'react';
import { Link } from 'react-router'
import logo from './logo.svg';
import './App.css';


class App extends Component {

    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <div className="navbar-brand">
                                Ace
                            </div>
                            <button type="button" className="navbar-toggle collapsed">
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div id="navbar-collapse" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                              <li><Link to="/">App</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Ace with React</h2>
                </div>
                <div className="flex-container">
                  {this.props.children}
                </div>
            </div>
        );
    }

}

export default App;
