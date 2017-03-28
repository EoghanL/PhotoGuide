import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import Query from './components/Query'

import Album from './components/Album'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Query />
          <Album />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
    return { photos: state.photos }
}

export default connect(mapStateToProps)(App);
