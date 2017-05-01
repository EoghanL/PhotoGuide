import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { GoogleApiComponent, scriptCache } from 'google-maps-react'
import Map from 'google-maps-react'

class Container extends React.Component {

  constructor(){
    super()

  }
  componentDidMount() {
      // Connect the initMap() function within this class to the global window context,
      // so Google Maps can invoke it
      window.initMap = this.initMap.bind(this);
      // Asynchronously load the Google Maps script, passing in the callback reference
      this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDpw4xd3kR7XgozvitFedNMsZoVVDjIBHo&callback=initMap')
  }
  loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
  }

  initMap() {
    let maps = new window.google.maps.Map(this.refs.map, { });
    const node = ReactDOM.findDOMNode(this.refs.map)
    let zoom = 14;
    let lat = 37.774929;
    let lng = -122.419416;
    const center = new window.google.maps.LatLng(lat, lng);
    const mapConfig = Object.assign({}, {
      center: center,
      zoom: zoom
    })
    this.map = new window.google.maps.Map(node, mapConfig);
  }

  render() {
    return (
        <div id='gMaps'>
            <div ref="map" style={{height: '750px', width: '750px'}}></div>
        </div>
    );
  }
};

export default Container

// export default new GoogleApiComponent({
//   apiKey: "AIzaSyDpw4xd3kR7XgozvitFedNMsZoVVDjIBHo"
// })(Container)
