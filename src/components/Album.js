import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

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
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ formatPhotos: formatPhotos}, dispatch)
// }

export default connect(mapStateToProps)(Album);
