import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getGeo from '../actions/getGeo'

class Photo extends Component {
  constructor(props){
    super(props)
    this.getCoordinates = this.getCoordinates.bind(this)
  }
  getCoordinates(){
    let myCoords = this.props.getGeo(this.props.geoId)

  }
  render(){
    return(
      <div>
        <img id={this.props.key} src={this.props.url} alt="flickr result" onClick={this.getCoordinates}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getGeo: getGeo }, dispatch)
}

export default connect(null, mapDispatchToProps)(Photo);
