import React, { Component } from 'react';
import { connect } from 'react-redux';


class Album extends Component{
  render(){
    return(
      <div>
        { this.props.album }
      </div>
    )
  }
}
function mapStateToProps(state){
  return { album: state.album }
}


export default connect(mapStateToProps)(Album);
