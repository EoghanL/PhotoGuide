import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Album extends Component{
  constructor(props){

  }
  render(){
    return(
      <div>
        <input type="text" placeholder="Search"></input>
        <button type="submit" onClick={this.firstClick}>Submit</button>
      </div>
    )
  }
}

function mapStateToProps(state){
    return { photos: state.photos }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ queryFlickr: queryFlickr}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
