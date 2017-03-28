import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import queryFlickr from '../actions/queryFlickr'

class Query extends Component{
  constructor(props){
    super(props)
    this.firstClick = this.firstClick.bind(this)
  }
  firstClick(e){
    var input = document.getElementById('searchQuery').value;
    this.props.queryFlickr(input);
  }
  render(){
    return(
      <div>
        <input id="searchQuery" type="text" placeholder="Search"></input>
        <button type="submit" onClick={this.firstClick}>Submit</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ queryFlickr: queryFlickr}, dispatch)
}

export default connect(null, mapDispatchToProps)(Query);
