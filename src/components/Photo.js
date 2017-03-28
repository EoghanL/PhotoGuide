import React, { Component } from 'react'

class Photo extends Component {
  render(){
    return(
      <div>
        <img src={this.props.url} alt="flickr result" />
      </div>
    )
  }
}

export default Photo;
