import React from 'react'

import $ from 'jquery'

export default function getGeo(imgId){
  return function(dispatch){
    $.ajax({
      url: `https://api.flickr.com/services/rest/?&method=flickr.photos.geo.getLocation&photo_id=${imgId}&format=json&api_key=c9a915838f46c00d25dbdbf28614f240`,
      method: "GET",
      success: function(data){
        let geoData = JSON.parse(data.slice(14, -1))
        debugger
        return { lat: geoData.latitude, long: geoData.longitude }
      },
      error: function(data){
        debugger
      }
    })
  }
}
